<template>
    <div class="Header-Main-container">
        <div class="elcontainer">
            <el-container>
                <el-header class="header">
                    <Header :page="Page"/>
                </el-header>
                <el-main class="elmain">
                    <div class="container">
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
                            <div class="problem-list">
                            <div v-for="(problem,index) in problemList" :key="problem.id" :class="index%2 == 0?'problem one':'problem two'">
                                <div class="edit"><el-button class="deleteButton" :icon="Delete" circle plain type="danger" @click="deleteConfirm(problem.name)"/></div>  
                                <div class="edit"><router-link :to="'/MyProblem/EditProblem/'+problem.id"><el-button class="editButton" :icon="Edit" circle plain type="info"/></router-link></div>
                                <div class="status">
                                <el-icon v-if="problem.status==1" style="color: #67c23a;height: 100%;"><SuccessFilled /></el-icon>
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
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
  </template>
  
  
<script setup>
    import Header from "../../components/Header.vue"
    import { ref } from 'vue'
    import { Edit, Delete } from '@element-plus/icons-vue'

    const Page=ref('')
    const deleteConfirm=(name)=>{
      ElMessageBox.confirm(
      `题目 "${name}" 将会被删除`,
      '警告',
      {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning',
        confirmButtonClass: 'el-button el-button--danger',
      }
    )
      .then(() => {
        ElMessage({
          type: 'success',
          message: '题目已删除',
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '已取消删除',
        })
      })
    }
    const problemList=[
  {status:1,id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:0,id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:0,id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:0,id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:0,id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"]},
  {status:0,id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:0,id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:0,id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"]},
  {status:1,id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:0,id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"]},
  {status:0,id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"]},
  {status:1,id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"]},
  {status:1,id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"]},
]
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
</script>
  
<style scoped>
  .header{
    padding: 0;
  }
  .elmain{
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0;
  display: flex;
  justify-content: center;
}
.main-header{
  width:100%;
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.container{
  width: 90%;
}
.main-header{
  width:100%;
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
}
.edit{
  display: flex;
  justify-content: center;
  min-width: 0px;
  width: 40px;
  align-items: center;
}
.status{
  min-width: 0px;
  width: 50px;
  flex: 10 0 auto;
  margin-left: 8px;
  padding: 12px 0;
  box-sizing: border-box;
}
.id{
  min-width: 0px;
  width: 70px;
  flex: 10 0 auto;
  margin-left: 8px;
  padding: 12px 0;
}
.name{
  min-width: 0px;
  width: 150px;
  flex: 150 0 auto;
  margin-left: 8px;
  padding: 12px 0;
}
.level{
  min-width: 0px;
  width: 50px;
  flex: 50 0 auto;
  margin-left: 8px;
  padding: 12px 0;
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
  padding: 12px 0;
}
.problem-list{
  width: 100%;
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
</style>