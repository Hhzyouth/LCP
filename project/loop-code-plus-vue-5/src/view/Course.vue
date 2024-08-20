<template>
  <div class="Header-Main-container">
    <el-container class="elcontainer">
        <el-header class="header">
            <Header :page="Page"/>
        </el-header>
        <el-main class="elmain">
          <div class="container">
            <div style="width: 800px;">
              <el-carousel :interval="4000" height="225px" indicator-position="none" :type="ifCard">
                <el-carousel-item v-for="item in 6" :key="item">
                  <img src="@/assets/image/course-Python.png" style="width: 100%;height: 100%;object-fit: cover;">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="myCard">
              <div style="display: flex;margin-bottom: 8px;">
                <el-avatar :src="store.avatar" style="width: 90px;height: 90px;"/>
                <div style="margin-left: 16px;display: flex;flex-direction: column;justify-content: space-around;">
                  <div style="font-size: 1.6rem;text-overflow:ellipsis;overflow: hidden;white-space: nowrap;">{{ store.nickname }}</div>
                  <el-button type="success" round style="font-size: 1.1rem;width: 120px;">我的课堂</el-button>
                </div>
              </div>
              <div v-for="item in fourCourse" style="text-overflow:ellipsis;overflow: hidden;white-space: nowrap;">{{ item }}</div>
            </div>
          </div>
          <div class="main-content">
            <div class="title">官方推荐</div>
            <div class="course-container">
              <router-link class="course-card" v-for="card in commendList" :to="'/Course/CourseInfo/'+card">
                <img src="@/assets/image/course-Python.png" alt=""  class="course-img">
                <div class="course-detail">
                    <div class="course-top">
                        <span class="course-title">Python程序设计</span>
                        <span class="course-author">LCP官方</span>     
                    </div>
                    <div class="course-bottom">
                        <span class="course-des">带你走入Python编程的奇妙世界</span>        
                    </div>
                </div>
              </router-link> 
              <div style="width: 230px;height: 0;"></div>
            </div>
            <div class="title">热门课程</div>
            <div class="course-container">
              <div class="course-card" v-for="card in hotList">
                <img src="@/assets/image/course-Python.png" alt=""  class="course-img">
                <div class="course-detail">
                    <div class="course-top">
                        <span class="course-title">Python程序设计</span>
                        <span class="course-author">LCP官方</span>     
                    </div>
                    <div class="course-bottom">
                        <span class="course-des">带你走入Python编程的奇妙世界</span>        
                    </div>
                </div>
              </div> 
              <div style="width: 230px;height: 0;"></div>
            </div>
            <div class="title">全部课程 ></div>
            <div class="course-container">
              <div class="course-card" v-for="card in allList">
                <img src="@/assets/image/course-Python.png" alt=""  class="course-img">
                <div class="course-detail">
                    <div class="course-top">
                        <span class="course-title">Python程序设计</span>
                        <span class="course-author">LCP官方</span>     
                    </div>
                    <div class="course-bottom">
                        <span class="course-des">带你走入Python编程的奇妙世界</span>        
                    </div>
                </div>
              </div> 
              <div style="width: 230px;height: 0;"></div>
            </div>
          </div>
        </el-main>
    </el-container>
  </div>
</template>


<script setup>
  import Header from "../components/Header.vue"
  import { ref, reactive, onMounted } from 'vue'
  import { useUserStore } from '@/store/user.js'

  const store=useUserStore()
  const Page=ref('4')
  const fourCourse=reactive(['Python程序设计','数据结构大师课','苏州大学2023-2024学年秋季学期Java程序设计与算法导论','考研冲刺'])
  const carouselList=reactive([])
  const commendList=reactive([1,2,3,4,5])
  const hotList=reactive([1,2,3,4,5])
  const allList=reactive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
  const ifCard=ref('card')

  const getWindowInfo = () => {
    if (window.innerWidth<1100){
        ifCard.value=''
    }else{
        ifCard.value='card'
    }
};
  onMounted(()=>{
    getWindowInfo()
    window.addEventListener('resize', getWindowInfo);
  })
</script>
<style scoped>
.Header-Main-container{
  height: 100vh;
}
.elcontainer{
  background-color: rgba(239, 239, 239, 0.5);
  height: 100%;
}
.elmain{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header{
  padding: 0;
}
.container{
  width:100%;
  display: flex;
  justify-content: center;
  max-width: 1225px;
}
.main-content{
  width:100%;
  max-width: 1225px;
}
.course-container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.course-container::after{
  margin-right: auto;
}
.myCard{
  width: 400px;
  height:225px;
  background-color: white;
  border-radius: 16px;
  margin-left: 25px;
  padding: 16px;
  box-sizing: border-box;
}
.course-card{
    background-color: white;
    width: 230px;
    height: 260px;
    border-radius: 8px;
    box-sizing: border-box;
    flex-shrink: 0;
    margin-bottom:20px;
    transition-delay: 0.1s;
    transition: box-shadow 0.3s;
}
.course-card:hover{
    box-shadow: 0px 0px 20px #cfcfcf;
    cursor: pointer;
    transition-delay: 0s;
}
.course-img{
    width: 230px;
    height: 129.375px;
    border-radius: 8px 8px 0 0;
}
.course-detail{
    height: 125px;
    padding: 0 8px;
    margin-bottom: 8px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: space-between;
}
.course-title{
    font-size: 1rem;
    font-weight: bold;
}
.course-author{
    font-size: 0.8rem;
}
.course-des{
    font-size: 0.8rem;
}
.course-top{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}
.course-bottom{
    height: 60px;
}
.title{
  font-size: 1.5rem;
  margin: 16px 0;
}


.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 225px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>