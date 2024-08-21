<template>
    <div class="Header-Main-container">
      <el-container>
        <el-header class="elheader">
            <Header :page="Page"/>
        </el-header>
        <el-main class="elmain">
          <div class="container">
            <div class="main-container">
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
                    <router-link class="name" :to='`/Problem/WorkingArea/${problem.problemId}`' target="_blank">{{ problem.problemName }}</router-link>
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
                </div>
                <div style="display: flex;width: 100%;justify-content: center;" v-if="PageCount>1">
                    <el-pagination background layout="prev, pager, next" :page-count="PageCount" class="pagination" @change="getProblem()"
                    v-model:current-page="currentPage"  />
                </div>
              </div>
            </div>
            <div class="main-rightside">
                <div class="title">题目集</div>
                <div class="colName" :title="collectionInfo.colName">{{ collectionInfo.colId+": "+collectionInfo.colName }}</div>
                <div class="title">完成情况</div>
                <el-progress class="elprogress" type="circle" :percentage="Math.ceil(problemDone.size/problemList.length*100)" @mouseover="ishover=true" @mouseleave="ishover=false" :stroke-width="12">
                    <template #default="{ percentage }">
                        <span v-if="ishover" style="font-size: 1.2rem;">{{ problemDone.size+" / "+problemList.length }}</span>
                        <span v-else style="font-size: 1.5rem;">{{ percentage }}%</span>
                    </template>
                </el-progress>
            </div>
          </div>
          
        </el-main>
      </el-container>
    </div>
  </template>

<script setup>
import Header from "@/components/Header.vue"
import { reactive, ref, onMounted, onBeforeUnmount } from 'vue'
import { useUserStore } from '@/store/user.js'
import { useRoute } from "vue-router"
import { getCollection } from "../../api/myProblem"

const ishover=ref(false)
const route = useRoute()
const { co } = route.params;
const mainLoading=ref(false)
const problemDone=ref(new Set())
const store=useUserStore()
const problemList=ref([])
const collectionInfo=ref([])
const getColProblem=()=>{
    mainLoading.value=true
    getCollection(
        co
    )
    .then((response)=>{
        if (response.data.code===500){
            ElMessage.error(response.data.data)
        }
        mainLoading.value=false
        console.log(response);
        problemList.value=response.data.data.problemList
        collectionInfo.value=response.data.data.collection
        problemDone.value=new Set(response.data.data.problemNum)
    })
}
const currentPage=ref(1)
const PageCount=ref(1)
const Page=ref('5')

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
console.log(co);

getColProblem()

const getWindowInfo = () => {
    if (window.innerWidth<=1301){
        document.querySelector('.main-rightside').style.display = 'none';
        document.querySelector('.main-container').style.width = '90%';
    }else{
        document.querySelector('.main-rightside').style.display = '';
        document.querySelector('.main-container').style.width = '900px';
    }
};

onMounted(()=>{
  getWindowInfo()
  window.addEventListener('resize', getWindowInfo,true);
})
onBeforeUnmount(()=>{
  window.removeEventListener('resize', getWindowInfo,true);
})
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
  display: flex;
  align-items: center;
  flex-direction: column;

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
.title{
    font-size: 1.2rem;
    margin: 8px 0;
}
.colName{
    margin: 8px 0 16px 0;
    font-size: 1.8rem;
    display:-webkit-box;
   overflow:hidden;
   text-overflow:ellipsis;
   -webkit-line-clamp:3;
   -webkit-box-orient:vertical;
}

</style>