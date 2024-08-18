<template>
    <div class="Header-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-main class="elmain">
                <div class="container">
                    <el-form :model="form" label-width="auto" :inline="true" :rules="rules" ref="formRef">
                        <el-form-item label="题目集ID">
                            <el-input v-model="form.colId" disabled placeholder="题目ID会自动生成"/>
                        </el-form-item>
                        <el-form-item label="题目集名称" required prop="colName">
                            <el-input v-model="form.colName" placeholder="请输入题目名称"/>
                        </el-form-item>
                        <el-form-item label="是否公开题目集" required>
                        <el-switch v-model="delivery" :active-text="delivery?'题目也将被公开':''" style="width: 148px;"/>
                        </el-form-item>
                        <el-form-item>
                            <div style="width: 100%;display: flex;justify-content: end;">
                                <el-button type="success" @click="submitForm(formRef)">确认并保存</el-button>
                                <el-button @click="()=>{router.go(-1)}">返回</el-button>
                            </div>
                        </el-form-item>
                    </el-form>
                    <div class="main-header">
                        <div class="edit"></div>
                        <div class="edit"></div>
                        <div class="status">状态</div>
                        <div class="id">编号</div>
                        <div class="name">题目</div>
                        <div class="level">难度</div>
                        <div class="tag">标签</div>
                        <div class="collection">题目集</div>
                    </div>
                    <TransitionGroup name="list" tag="div" class="problem-list">
                        <div v-for="(problem,index) in problemList" :key="problem.problemId" class="problem" 
                            draggable="true"
                            @dragstart="dragstart($event, index)"
                            @dragenter="dragenter($event, index)"
                            @dragend="dragend"
                            @dragover="dragover"
                        >
                            <div class="edit"><el-button class="deleteButton" :icon="Delete" circle plain type="danger" @click="deleteConfirm(problem.problemName,index)"/></div>  
                            <div class="edit"><router-link :to="'/MyProblem/EditProblem/'+problem.problemId" v-if="problem.userId==store.userId"><el-button class="editButton" :icon="Edit" circle plain type="info"/></router-link></div>
                            <div class="status" :style="{color:problem.status==0?'#67C23A':'#409EFF'}">
                                {{ problem.status==0 ? '私有' : '公开' }}
                            </div>
                            <div class="id">{{ problem.problemId }}</div>
                            <router-link class="name" :to='`/Problem/WorkingArea/${problem.problemId}`' draggable="false">{{ problem.problemName }}</router-link>
                            <div :class="classLevel(problem.difficultyLevel)">{{ showLevel(problem.difficultyLevel) }}</div>
                            <el-scrollbar class="tag-container">
                            <div class="tag">
                                <el-tag v-for="(tag,index) in JSON.parse(problem.tag)" :key="`${problem.problemId}+${index}`" type="success" class="tag-item" round>{{ tag }}</el-tag>
                            </div>
                            </el-scrollbar>
                            <el-scrollbar class="collection-container">
                            <div class="collection">
                                <el-tag v-for="(collection,index) in JSON.parse(problem.collection)" :key="collection" type="primary" class="tag-item" round>{{ collection }}</el-tag>
                            </div>
                            </el-scrollbar>
                        </div>
                    </TransitionGroup>
                    <el-button type="success" plain round :icon="Plus" @click="open()">加入题目</el-button>
                </div>
            </el-main>
        </el-container>
    </div>
    <el-drawer v-model="drawer" :with-header="false" :size="'70%'">
      <el-tabs type="border-card" :tab-change="tabChange()" v-model="activeName">
        <el-tab-pane label="我的题目" v-loading="problemLoading" name="myProblem">
          <div class="main-header">
            <div class="check"></div>
            <div class="status">状态</div>
            <div class="id">编号</div>
            <div class="name">题目</div>
            <div class="level">难度</div>
            <div class="tag">标签</div>
            <div class="collection">题目集</div>
            </div>
            <div class="problem-list">
            <el-checkbox-group v-model="problemList">
              <div v-for="(problem,index) in MyProblemList" :key="problem.problemId" :class="index%2 == 0?'problem one':'problem two'">
                  <div class="check"><el-checkbox :value="{problemId:problem.problemId,userId:problem.userId,problemName:problem.problemName,difficultyLevel:problem.difficultyLevel,tag:problem.tag,collection:problem.collection}" :label="indexOfProblem(problem.problemId)" >
                  </el-checkbox></div>
                  <div class="status" :style="{color:problem.status==0?'#67C23A':'#409EFF'}">
                    {{ problem.status==0 ? '私有' : '公开' }}
                  </div>
                  <div class="id">{{ problem.problemId }}</div>
                  <router-link class="name" :to='`/Problem/WorkingArea/${problem.problemId}`' :title="problem.problemName">{{ problem.problemName }}</router-link>
                  <div :class="classLevel(problem.difficultyLevel)">{{ showLevel(problem.difficultyLevel) }}</div>
                  <el-scrollbar class="tag-container">
                    <div class="tag">
                        <el-tag v-for="tag in JSON.parse(problem.tag)" type="success" class="tag-item" round>{{ tag }}</el-tag>
                    </div>
                  </el-scrollbar>
                  <el-scrollbar class="collection-container">
                  <div class="collection">
                      <el-tag v-for="collection in JSON.parse(problem.collection)" type="primary" class="tag-item" round>{{ collection }}</el-tag>
                  </div>
                </el-scrollbar>
              </div>
            </el-checkbox-group>
          </div>
          <div style="display: flex;width: 100%;justify-content: center;" v-if="myProblemPageCount>1">
              <el-pagination background layout="prev, pager, next" :page-count="myProblemPageCount" class="pagination" @change="toGetMyProblems()"
              v-model:current-page="myProblemCurrentPage"  />
          </div>
        </el-tab-pane>
        <el-tab-pane label="公开题目" name="publicProblem">
          <div class="main-header">
            <div class="check"></div>
            <div class="status">状态</div>
            <div class="id">编号</div>
            <div class="name">题目</div>
            <div class="level">难度</div>
            <div class="tag">标签</div>
            <div class="collection">题目集</div>
            </div>
            <div class="problem-list">
            <el-checkbox-group v-model="problemList">
              <div v-for="(problem,index) in publicProblemList" :key="problem.problemId" :class="index%2 == 0?'problem one':'problem two'">
                  <div class="check"><el-checkbox :value="{problemId:problem.problemId,userId:problem.userId,problemName:problem.problemName,difficultyLevel:problem.difficultyLevel,tag:problem.tag,collection:problem.collection}" :label="indexOfProblem(problem.problemId)" >
                  </el-checkbox></div>
                  <div class="status" :style="{color:problem.status==0?'#67C23A':'#409EFF'}">
                    {{ problem.status==0 ? '私有' : '公开' }}
                  </div>
                  <div class="id">{{ problem.problemId }}</div>
                  <router-link class="name" :to='`/Problem/WorkingArea/${problem.problemId}`' :title="problem.problemName">{{ problem.problemName }}</router-link>
                  <div :class="classLevel(problem.difficultyLevel)">{{ showLevel(problem.difficultyLevel) }}</div>
                  <el-scrollbar class="tag-container">
                    <div class="tag">
                        <el-tag v-for="tag in JSON.parse(problem.tag)" type="success" class="tag-item" round>{{ tag }}</el-tag>
                    </div>
                  </el-scrollbar>
                  <el-scrollbar class="collection-container">
                  <div class="collection">
                      <el-tag v-for="collection in JSON.parse(problem.collection)" type="primary" class="tag-item" round>{{ collection }}</el-tag>
                  </div>
                </el-scrollbar>
              </div>
            </el-checkbox-group>
          </div>
          <div style="display: flex;width: 100%;justify-content: center;" v-if="publicProblemPageCount>1">
              <el-pagination background layout="prev, pager, next" :page-count="publicProblemPageCount" class="pagination" @change="toGetPublicProblems()"
              v-model:current-page="publicProblemCurrentPage"  />
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
</template>
  
  
<script setup>
    import Header from "../../components/Header.vue"
    import { ref, reactive } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import { Edit, Delete, Plus } from '@element-plus/icons-vue'
    import { useUserStore } from '@/store/user.js'
    import { getMyCollection, setCollection, getMyProblems } from '@/api/myProblem.js'
    import { getProblems } from '@/api/problem.js'

    const myProblemPageCount=ref(1)
    const router=useRouter()
    const myProblemCurrentPage=ref(1)
    const publicProblemCurrentPage=ref(1)
    const publicProblemPageCount=ref(1)
    const problemLoading=ref(false)
    const store=useUserStore()
    const problemList=ref([])
    const publicProblemList=ref([])
    const activeName=ref('myProblem')
    const form = reactive({
        userId:store.userId,
        colId:null,
        colName: '',
        problemList:[]
        
    })
    const formRef=ref()
    const drawer = ref(false)
    const delivery=ref(false)
    const Page=ref('')
    const deleteConfirm=(name,index)=>{
      ElMessageBox.confirm(
      `题目 "${name}" 将从题目集中移出`,
      '警告',
      {
        confirmButtonText: '移出',
        cancelButtonText: '取消',
        type: 'warning',
        confirmButtonClass: 'el-button el-button--danger',
      }
    )
      .then(() => {
        problemList.value.splice(index, 1);
        ElMessage({
          type: 'success',
          message: '题目已移出',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消移出',
        })
      })
    }
    const route = useRoute()
    const { ec } = route.params;
    const showLevel=(level)=>{
  switch(level){
    case 1:
    case 2:
      return '简单'
    case 3:
    case 4:
      return '普通'
    case 5:
    case 6:
      return '中等'
    case 7:
    case 8:
      return '困难'
    case 9:
    case 10:
      return '炼狱'
    default:
      return '未定级'
  }
}
const classLevel=(level)=>{
  switch(level){
    case 1:
    case 2:
      return 'level easy'
    case 3:
    case 4:
      return 'level normal'
    case 5:
    case 6:
      return 'level middle'
    case 7:
    case 8:
      return 'level hard'
    case 9:
    case 10:
      return 'level hell'
    default:
      return 'level notKnow'
  }
}
const indexOfProblem=(pid)=>{
  const p=problemList.value.findIndex(item => item.problemId === pid)
  return p==-1?'':p+1
}

const MyProblemList=ref([])

let dragIndex = 0
function dragstart(e, index) {
	e.stopPropagation()
	dragIndex = index
	setTimeout(() => {
		e.target.classList.add('moveing')
	},0)
}
function dragenter(e, index) {
	e.preventDefault()

    if (dragIndex !== index) {
        const source = problemList.value[dragIndex];
        problemList.value.splice(dragIndex, 1);
        problemList.value.splice(index, 0, source);

        dragIndex = index
    }
	
}
function dragover(e) {
	e.preventDefault()
	e.dataTransfer.dropEffect = 'move'
}
function dragend(e) {
	e.target.classList.remove('moveing')
}
if(ec!=='0'){
  getMyCollection(
    parseInt(ec)
  ).then((response)=>{
    console.log(response);
    
    form.colId=response.data.data.collection.colId
    form.colName=response.data.data.collection.colName
    delivery.value=response.data.data.collection.status===1?true:false
    problemList.value=response.data.data.problemList
  }).catch((error)=>{
    ElMessage.error("网络错误")
  })
}

const rules = reactive({
    colName: [
        { required: true, message: '题目集名称不能为空', trigger: 'blur' },
    ],
})
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      form.status=delivery.value?1:0
      form.problemList=[]
      for (let item of problemList.value){
        form.problemList.push({problemId:item.problemId,problemName:item.problemName})
      }
      setCollection(
        form
      ).then((response)=>{
        console.log(response);
        if (response.data.code===200){
          ElMessage({
            type:'success',
            message:'保存成功'
          })
        }
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}
const toGetMyProblems=()=>{
  problemLoading.value=true
  getMyProblems(
    myProblemCurrentPage.value
  ).then((response)=>{
    console.log(response);
    
    problemLoading.value=false
    MyProblemList.value=response.data.data
    myProblemPageCount.value=Math.ceil(response.data.num/30) 
  })
}
const toGetPublicProblems=()=>{
  getProblems(
        publicProblemCurrentPage.value,
        [],
        [],
        store.userId
    ).then(function (response) {
        console.log(response)
        publicProblemList.value=response.data.data.problemList      
        publicProblemPageCount.value=Math.ceil(response.data.data.num/30)    
    })
}
const open=()=>{
  drawer.value=true
  // toGetMyProblems()
}
const tabChange=()=>{
  if (activeName.value==="myProblem"){
    toGetMyProblems()
  }else{
    toGetPublicProblems()
  }
}
</script>


<style scoped>
.header{
    padding: 0;
}
.easy{
    color: #3C674B
}
.normal{
    color: #78AA3B;
}
.middle{
    color: #F8C305;
}
.hard{
    color: #E3771D;
}
.hell{
    color: #D82A23;
}
.container{
    height: 100%;
    padding: 0 16px;
}
.elmain{
    height: calc(100% - 60px);
}
.elcontainer{
    height: 100%;
}
.Header-Main-container{
    height: 100vh;
}
.edit-top{
    background-color: white;
    display: flex;
    align-items: center;
}
.main-header{
  width:100%;
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.edit{
  display: flex;
  justify-content: center;
  min-width: 30px;
  width: 40px;
  align-items: center;
}
.check{
  display: flex;
  justify-content: center;
  min-width: 60px;
  width: 60px;
  align-items: center;
}
.status{
  min-width: 0px;
  width: 50px;
  flex: 10 0 auto;
  margin-left: 16px;
  padding: 12px 0;
  box-sizing: border-box;
  font-size: 1rem;
}
.id{
  min-width: 0px;
  width: 70px;
  flex: 10 0 auto;
  margin-left: 8px;
  padding: 12px 0;
  font-size: 1rem;
}
.name{
  min-width: 0px;
  width: 130px;
  flex: 150 0 auto;
  margin-left: 8px;
  padding: 12px 0;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.level{
  min-width: 0px;
  width: 40px;
  flex: 40 0 auto;
  margin-left: 8px;
  padding: 12px 0;
  font-size: 1rem;
}
.main-header .tag{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 12px 0;
}
.problem-list{
  width: 100%;
  min-height: 16px;
}
.list-move, 
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}
.moveing {
	opacity: 0;
}
.tag{
  display: flex;
}
.tag-container{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 12px 0;
}
.main-header .collection{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 12px 0;
}
.collection{
  display: flex;
}
.collection-container{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 12px 0;
}
.problem-container{
  min-width: 0px;
  width: 300px;
  flex: 300 0 auto;
  margin-left: 8px;
  padding: 12px 0;
}
.problem{
  display: flex;
  margin: 16px 0;
  border-radius: 16px;
  background-color: rgba(239, 239, 239, 0.3); 
  align-items: center;
}
.tag-item{
  margin-right: 5px;
  white-space: nowrap;
}
.deleteButton{
  border: none;
  width: 30px;
  height : 30px;
}
.editButton{
  border: none;
  width: 30px;
  height : 30px;
}
.createButton{
  display: flex;
  justify-content: left;
  border: none;
  height : 30px;
  width: 30px;
  overflow-x: hidden;
  transition: width 0.3s;
}
.createButton.el-button.is-round{
  padding: 8px 8.45px;
}
.bc:hover{
  left: -6px;
}
.bc:hover .createButton{
  width: 94.89px;
}
.bc{
  position: absolute;
  bottom: 9px;
  left: 4px;
  transition: left 0.3s;
}
.editp{
  position: relative;
  display: flex;
  justify-content: center;
  min-width: 30px;
  width: 40px;
  align-items: center;
}
</style>