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
                            <div class="solution">题解名字</div>
                            <div class="id">题目编号</div>
                            <div class="name">题目</div>
                            <div class="tag">题解标签</div>
                            </div>
                            <div class="problem-list">
                            <div v-for="(problem,index) in problemList" :key="problem.id" :class="index%2 == 0?'problem one':'problem two'">
                                <div class="edit"><el-button class="deleteButton" :icon="Delete" circle plain type="danger" @click="deleteConfirm(problem.name)"/></div>  
                                <div class="edit"><router-link :to="'/MyProblem/EditProblem/'+problem.id"><el-button class="editButton" :icon="Edit" circle plain type="info"/></router-link></div>
                                <el-scrollbar class="solution-container">
                                    <div class="solution">
                                        {{ problem.solutionName }}
                                    </div>
                                </el-scrollbar>
                                <div class="id">{{ problem.id }}</div>
                                <router-link class="name" :to='`/Problem/WorkingArea/${problem.id}`'>{{ problem.name }}</router-link>
                                <el-scrollbar class="tag-container">
                                <div class="tag">
                                    <el-tag v-for="tag in problem.tags" type="success" class="tag-item" round>{{ tag }}</el-tag>
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
  {solutionName:'关于此题的诸多解法分析以及时间复杂度的讨论，请多多点赞',id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"]},
  {solutionName:'关于此题的诸多解法分析',id:1,name:"两数求和",level:1,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:168,name:"两数求和2",level:4,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:7,name:"两数之积",level:9,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:12,name:"两数之积2",level:7,tags:["数组","哈希表"],collections:["LCP101"]},
  {solutionName:'关于此题的诸多解法分析',id:56,name:"两数之积3",level:6,tags:["数组","哈希表","链表","二叉树","深度优先搜索"],collections:["LCP101","微软面试","苏州大学练习题"]},
]
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
.solution{
    min-width: 0px;
    width: 150px;
    flex: 150 0 auto;
    margin-left: 8px;
    padding: 12px 0;
    box-sizing: border-box;
    white-space:nowrap;
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
.solution-container{
    min-width: 0px;
    width: 150px;
    flex: 150 0 auto;
    box-sizing: border-box;
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