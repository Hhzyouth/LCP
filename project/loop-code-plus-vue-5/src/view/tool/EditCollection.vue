<template>
    <div class="Header-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-main class="elmain">
                <div class="container">
                    <el-form :model="form" label-width="auto" :inline="true">
                        <el-form-item label="题目集ID">
                            <el-input v-model="form.problemId" disabled placeholder="题目ID会自动生成"/>
                        </el-form-item>
                        <el-form-item label="题目集名称" required>
                            <el-input v-model="form.problemName" placeholder="请输入题目名称"/>
                        </el-form-item>
                        <el-form-item label="是否公开题目集" required>
                        <el-switch v-model="form.delivery" :active-text="form.delivery?'题目也将被公开':''" style="width: 148px;"/>
                        </el-form-item>
                        <el-form-item>
                            <div style="width: 100%;display: flex;justify-content: end;">
                                <el-button type="success" @click="onSubmit">确认并保存</el-button>
                                <el-button @click="()=>{this.$router.go(-1)}">取消</el-button>
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
                        <div v-for="(problem,index) in problemList" :key="problem.id" class="problem" 
                            draggable="true"
                            @dragstart="dragstart($event, index)"
                            @dragenter="dragenter($event, index)"
                            @dragend="dragend"
                            @dragover="dragover"
                        >
                            <div class="edit"><el-button class="deleteButton" :icon="Delete" circle plain type="danger" @click="deleteConfirm(problem.name)"/></div>  
                            <div class="edit"><router-link :to="'/MyProblem/EditProblem/'+problem.id" v-if="problem.userId==store.userId"><el-button class="editButton" :icon="Edit" circle plain type="info"/></router-link></div>
                            <div class="status" :style="{color:problem.status==0?'#67C23A':'#409EFF'}">
                                {{ problem.status==0 ? '私有' : '公开' }}
                            </div>
                            <div class="id">{{ problem.id }}</div>
                            <router-link class="name" :to='`/Problem/WorkingArea/${problem.id}`' draggable="false">{{ problem.name }}</router-link>
                            <div :class="classLevel(problem.level)">{{ showLevel(problem.level) }}</div>
                            <el-scrollbar class="tag-container">
                            <div class="tag">
                                <el-tag v-for="(tag,index) in problem.tags" :key="`${problem.id}+${index}`" type="success" class="tag-item" round>{{ tag }}</el-tag>
                            </div>
                            </el-scrollbar>
                            <el-scrollbar class="collection-container">
                            <div class="collection">
                                <el-tag v-for="(collection,index) in problem.collections" :key="collection" type="primary" class="tag-item" round>{{ collection }}</el-tag>
                            </div>
                            </el-scrollbar>
                        </div>
                    </TransitionGroup>
                    <el-button type="success" plain round :icon="Plus" @click="drawer=true">加入题目</el-button>
                </div>
            </el-main>
        </el-container>
    </div>
    <el-drawer v-model="drawer" title="I am the title" :with-header="false" :size="'60%'">
      <el-tabs type="border-card">
        <el-tab-pane label="我的题目">
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
              <div v-for="(problem,index) in MyProblemroblemList" :key="problem.id" :class="index%2 == 0?'problem one':'problem two'">
                  <div class="check"><el-checkbox :value="problem" :label="indexOfProblem(problem.id)" >
                  </el-checkbox></div>
                  <div class="status" :style="{color:problem.status==0?'#67C23A':'#409EFF'}">
                    {{ problem.status==0 ? '私有' : '公开' }}
                  </div>
                  <div class="id">{{ problem.id }}</div>
                  <router-link class="name" :to='`/Problem/WorkingArea/${problem.id}`'>{{ problem.name }}</router-link>
                  <div :class="classLevel(problem.level)">{{ showLevel(problem.level) }}</div>
                  <el-scrollbar class="tag-container">
                  <div class="tag">
                      <el-tag v-for="tag in problem.tags" type="success" class="tag-item" round>{{ tag }}</el-tag>
                  </div>
                  </el-scrollbar>
                  <el-scrollbar class="collection-container">
                  <div class="collection">
                      <el-tag v-for="collection in problem.collections" type="primary" class="tag-item" round>{{ collection }}</el-tag>
                  </div>
                </el-scrollbar>
              </div>
            </el-checkbox-group>
          </div>
        </el-tab-pane>
        <el-tab-pane label="公开题目">
          
        </el-tab-pane>
      </el-tabs>
    </el-drawer>
</template>
  
  
<script setup>
    import Header from "../../components/Header.vue"
    import { ref } from 'vue'
    import { useRoute } from 'vue-router';
    import { reactive } from 'vue'
    import { Edit, Delete, Plus } from '@element-plus/icons-vue'
    import { useUserStore } from '@/store/user.js'

    const form = reactive({
        problemId:'',
        problemName: '',
        description: '',
        inputSample:'',
        outputSample:'',
        difficultyLevel: 1,
        status: false,
        tag: [],
    })
    const store=useUserStore()
    const drawer = ref(false)
    const onSubmit = () => {
      console.log('submit!')
    }
    const Page=ref('')
    const checkList=ref([])
    const deleteConfirm=(name)=>{
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
  const p=problemList.value.findIndex(item => item.id === pid)
  return p==-1?'':p+1
}
const problemList=ref([
  {status:1,id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"],userId:11},
  {status:0,id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"],userId:25},
])

const MyProblemroblemList=ref([
  {status:1,id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:169,name:"两数求和4",level:8,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:13,name:"两数之积4",level:8,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:170,name:"两数求和5",level:9,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
  {status:0,id:14,name:"两数之积5",level:9,tags:["数组","哈希表"],collections:["LCP101"],userId:1},
])

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
  width: 120px;
  flex: 150 0 auto;
  margin-left: 8px;
  padding: 12px 0;
  font-size: 1rem;
}
.level{
  min-width: 0px;
  width: 50px;
  flex: 50 0 auto;
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