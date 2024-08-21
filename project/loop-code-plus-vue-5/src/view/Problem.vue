<template>
    <div class="Header-Main-container">
      <el-container>
        <el-header class="elheader">
            <Header :page="Page"/>
        </el-header>
        <el-main class="elmain">
          <div class="container">
            <div class="main-container">
              <div class="top-extra">
                <div>
                  <el-tag v-for="(item,index) in activeTagList" :key="index" class="activeTagList" closable round @close="activeTagListClose(item)" type="success" effect="light">
                    {{ item }}
                  </el-tag>
                </div>
                <div>
                  <el-tag v-for="(item,index) in activeCollectionList" :key="index" class="activeCollectionList" closable round @close="activeCollectionListClose(item)" type="primary" effect="light">
                    {{ item }}
                  </el-tag>
                </div>
              </div>
              <div class="main" v-loading="mainLoading">
                <div class="main-header">
                  <div class="status">状态</div>
                  <div class="id">编号</div>
                  <div class="name">题目</div>
                  <div class="level">难度</div>
                  <div class="tag">标签</div>
                  <div class="collection">题目集</div>
                </div>
                <div class="problem-list">
                  <div v-for="(problem,index) in problemList" :key="problem.problemId" :class="index%2 == 0?'problem one':'problem two'">
                    <div class="status">
                      <el-icon v-if="problemDone.has(problem.problemId)" style="color: #67c23a;height: 100%;"><SuccessFilled /></el-icon>
                    </div>
                    <div class="id">{{ problem.problemId }}</div>
                    <router-link class="name" :to='`/Problem/WorkingArea/${problem.problemId}`' target="_blank" :title="problem.problemName">{{ problem.problemName }}</router-link>
                    <div :class="classLevel(problem.difficultyLevel)">{{ showLevel(problem.difficultyLevel) }}</div>
                    <el-scrollbar class="tag-container">
                      <div class="tag">
                        <el-tag v-for="tag in JSON.parse(problem.tag)" type="success" class="tag-item" round>{{ tag }}</el-tag>
                      </div>
                    </el-scrollbar>
                    <el-scrollbar class="collection-container">
                      <div class="collection">
                        <router-link v-for="collection in JSON.parse(problem.collection)" :to="`/Problem/Collection/${colNametoId[collection]}`"><el-tag  type="primary" class="tag-item" round>{{ collection }}</el-tag></router-link>
                      </div>
                    </el-scrollbar>
                  </div>
                </div>
                <div style="display: flex;width: 100%;justify-content: center;" v-if="PageCount>1">
                    <el-pagination background layout="prev, pager, next" :page-count="PageCount" class="pagination" @change="getProblem()"
                    v-model:current-page="currentPage"  />
                </div>
              </div>
            </div>
            <div class="main-rightside">
              <el-collapse v-model="activeNames">
                <el-collapse-item title="数据结构" name="1">
                  <el-tag v-for="(item,index) in dataStructureList" round class="dataStructureList" :key="index" :type="dataStructureCSSList[index].type" :effect="dataStructureCSSList[index].effect" @click="setDataStructureCSS(index)">
                    {{ item }}
                  </el-tag>
                </el-collapse-item>
                <el-collapse-item title="算法" name="2">
                  <el-tag v-for="(item,index) in algorithmList" round class="algorithmList" :key="index" :type="algorithmCSSList[index].type" :effect="algorithmCSSList[index].effect" @click="setAlgorithmCSS(index)">
                    {{ item }}
                  </el-tag>
                </el-collapse-item>
                <el-collapse-item title="题目集" name="3">
                  <el-tag v-for="(item,index) in collectionList" round class="collectionList" :key="index" :type="collectionCSSList[index].type" :effect="collectionCSSList[index].effect" @click="setCollectionCSS(index)">
                    {{ item }}
                  </el-tag>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
          
        </el-main>
      </el-container>
    </div>
  </template>

<script setup>
import Header from "../components/Header.vue"
import { reactive, ref } from 'vue'
import { getProblems, getCollectionList } from '@/api/problem.js'
import { useUserStore } from '@/store/user.js'

const loading=ref(false)
const mainLoading=ref(false)
const problemDone=ref(new Set())
const store=useUserStore()
const getProblem=()=>{
  // console.log(Array.from(toRaw(activeTagList)));
  mainLoading.value=true
    getProblems(
        currentPage.value,
        Array.from(activeTagList),
        Array.from(activeCollectionList),
        store.userId
    ).then(function (response) {
        console.log(response)
        loading.value=false
        problemList.value=response.data.data.problemList
        problemDone.value=new Set(response.data.data.problemNum)           
        PageCount.value=Math.ceil(response.data.num/30)    
         
    })
    .catch(function (error) {
        ElMessage.error('网络连接错误')
    })
    .finally(()=>{
      mainLoading.value=false
    })
}
const activeNames = ref([])
const currentPage=ref(1)
const PageCount=ref(1)
const Page=ref('5')
const problemList=ref([])
const dataStructureList=["哈希表","树","二叉树","堆","栈","图","链表","集合","队列","双向链表","最小生成树","并查集","字典树","线段树","树状数组","后缀数组","数组","字符串","矩阵"];
const dataStructureCSSList=reactive([{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' }])
const algorithmList=["动态规划","贪心","深度优先搜索","二分查找","广度优先搜索","回溯","递归","分治","记忆化搜索","归并排序","快速选择"];
const initAlgorithmCSSList=[{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' },{ type: 'info', effect: 'plain' }]
const algorithmCSSList=reactive([...initAlgorithmCSSList])
const collectionList=reactive([])
const collectionCSSList=reactive([])
const rawCollectionList=ref([])
const colNametoId=reactive({})

const activeTagList=reactive(new Set());
const activeCollectionList=reactive(new Set());

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
const setDataStructureCSS=(index)=>{
  if(dataStructureCSSList[index].type=='info'){
    dataStructureCSSList[index].type='success'
    dataStructureCSSList[index].effect='dark'
    activeTagList.add(dataStructureList[index])
  }else{
    dataStructureCSSList[index].type='info'
    dataStructureCSSList[index].effect='plain'
    activeTagList.delete(dataStructureList[index])
  }
  currentPage.value=1
  getProblem()
}
const activeTagListClose=(item)=>{
  activeTagList.delete(item)
  if(dataStructureList.indexOf(item)==-1){
    algorithmCSSList[algorithmList.indexOf(item)].type='info'
    algorithmCSSList[algorithmList.indexOf(item)].effect='plain'
  }else{
    dataStructureCSSList[dataStructureList.indexOf(item)].type='info'
    dataStructureCSSList[dataStructureList.indexOf(item)].effect='plain'
  }
  currentPage.value=1
  getProblem()
  
}
const setAlgorithmCSS=(index)=>{
  if(algorithmCSSList[index].type=='info'){
    algorithmCSSList[index].type='success'
    algorithmCSSList[index].effect='dark'
    activeTagList.add(algorithmList[index])
  }else{
    algorithmCSSList[index].type='info'
    algorithmCSSList[index].effect='plain'
    activeTagList.delete(algorithmList[index])
  }
  currentPage.value=1
  getProblem()
}
const activeCollectionListClose=(item)=>{
  activeCollectionList.delete(item)
  collectionCSSList[collectionList.indexOf(item)].type='info'
  collectionCSSList[collectionList.indexOf(item)].effect='plain'
  currentPage.value=1
  getProblem()
}
const setCollectionCSS=(index)=>{
  if(collectionCSSList[index].type=='info'){
    collectionCSSList[index].type='primary'
    collectionCSSList[index].effect='dark'
    activeCollectionList.add(collectionList[index])
  }else{
    collectionCSSList[index].type='info'
    collectionCSSList[index].effect='plain'
    activeCollectionList.delete(collectionList[index])
  }
  currentPage.value=1
  getProblem()
}
getProblem()
getCollectionList()
.then((response)=>{
  console.log(response);
  rawCollectionList.value=response.data.data
  for (let i of rawCollectionList.value){
    collectionList.push(i.colName)
    collectionCSSList.push({ type: 'info', effect: 'plain' })
    colNametoId[i.colName]=i.colId
  }
})
</script>
<script>
const getWindowInfo = () => {
    if (window.innerWidth<=1301){
        document.querySelector('.main-rightside').style.display = 'none';
        document.querySelector('.main-container').style.width = '90%';
    }else{
        document.querySelector('.main-rightside').style.display = '';
        document.querySelector('.main-container').style.width = '900px';
    }
};
export default {
  mounted(){
    getWindowInfo()
    window.addEventListener('resize', getWindowInfo);
  },
  beforeUnmount(){
    window.removeEventListener('resize', getWindowInfo);
  }
  
}
</script>


<style scoped>
.elheader{
  padding:0;
}
.container{
  width: 100%;
  min-width: 545px;
}
.elmain{
  width: 100%;
  height: calc(100vh - 60px);
}
.main-container{
  width: 900px;
}
.main-header{
  width:100%;
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.main{
  width: 100%;
  min-height: 100%;
}
.main-rightside{
  margin-left: 40px;
  width: 210px;
}
.container{
  display: flex;
  justify-content: center;
}
.problem-list{
  width: 100%;
}
.status{
  min-width: 0px;
  width: 50px;
  flex: 10 0 auto;
  margin-left: 8px;
  padding: 10px 0;
  box-sizing: border-box;
}
.id{
  min-width: 0px;
  width: 70px;
  flex: 10 0 auto;
  margin-left: 8px;
  padding: 10px 0;
}
.name{
  min-width: 0px;
  width: 150px;
  flex: 150 0 auto;
  margin-left: 8px;
  padding: 10px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.level{
  min-width: 0px;
  width: 50px;
  flex: 50 0 auto;
  margin-left: 8px;
  padding: 10px 0;
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
.main-header .tag{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 10px 0;
}
.tag{
  display: flex;
}
.tag-container{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 10px 0;
}
.main-header .collection{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 10px 0;
}
.collection{
  display: flex;
}
.collection-container{
  min-width: 0px;
  width: 50px;
  flex: 200 0 auto;
  margin-left: 8px;
  padding: 10px 0;
}
.problem{
  display: flex;
}
.two{
  background-color: rgba(239, 239, 239, 0.3);
}
.tag-item{
  margin-right: 5px;
  white-space: nowrap;
}
.dataStructureList{
  margin: 0 2px 5px 0;
  cursor: pointer;
}
.activeTagList{
  margin: 0 2px 5px 0;
}
.algorithmList{
  margin: 0 2px 5px 0;
  cursor: pointer;
}
.activeCollectionList{
  margin: 0 2px 5px 0;
}
.collectionList{
  margin: 0 2px 5px 0;
  cursor: pointer;
}
.pagination{
  margin-top: 16px;
}
</style>