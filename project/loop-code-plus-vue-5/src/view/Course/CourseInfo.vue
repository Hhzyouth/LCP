<template>
    <div class="Header-Main-container">
      <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-main class="elmain">
               <div :class="parseInt(c)%2==0 ? 'main-head bac1' : 'main-head bac2'">
                  <div class="head-content">
                    <img src="@/assets/image/course-Python.png" alt=""  class="course-img">
                    <div style="color: rgba(255, 255, 255, 0.9); margin-left: 32px;">
                      <h2 style="font-size: 2rem;">
                        Python程序设计
                      </h2>
                      <p>
                        课程ID:5644
                      </p>
                    </div>
                  </div>
                </div>
                <div class="main-content">
                  <div class="course-container">
                    <div class="course-main">
                      <el-timeline style="max-width: 600px">
                        <el-timeline-item
                          v-for="(activity, index) in activities"
                          :key="index"
                          :icon="activity.icon"
                          :type="activity.type"
                          :color="activity.color"
                          :size="activity.size"
                          :hollow="activity.hollow"
                          :timestamp="activity.timestamp"
                        >
                          {{ activity.content }}
                        </el-timeline-item>
                      </el-timeline>
                    </div> 
                    <div class="course-aside">
                      <div class="creater">
                        <div style="width: 100%;display: flex">
                          <div style="background-color: #FAB900;height: 100%;width: 10px;margin-right: 15px;"></div>
                          <span>课程创建者</span>
                        </div>
                        <div class="course-info">
                          <el-avatar :src="store.avatar" style="width: 100px;height: 100px;"/>
                          <p>创建人名字</p>
                        </div>
                      </div>
                      <div class="description">
                        <div style="width: 100%;display: flex">
                          <div style="background-color: #FAB900;height: 100%;width: 10px;margin-right: 15px;"></div>
                          <span>课程描述</span>
                        </div>
                      </div>
                    </div> 
                  </div>
                </div>
            </el-main>
      </el-container>
    </div>
  </template>
  
  
  <script setup>
    import Header from "../../components/Header.vue"
    import { ref, reactive, onMounted,onUnmounted } from 'vue'
    import { useUserStore } from '@/store/user.js'
    import { useRoute } from "vue-router";
  
    const store=useUserStore()
    const Page=ref('4')
    const route = useRoute()
    const { c } = route.params;
    
    const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
const getWindowInfo = () => {
  if (window.innerWidth<=1280){
      const element = document.querySelector('.course-aside');
      element.style.flexDirection = 'row';
  }else{
      const element = document.querySelector('.course-aside');
      element.style.flexDirection = 'column';
  }
};
onMounted(()=>{
  getWindowInfo()
  window.addEventListener('resize', getWindowInfo)
})
onUnmounted(()=>{
  window.removeEventListener('resize', getWindowInfo)
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
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }
  .header{
    padding: 0;
  }
  .main-content{
    padding: 16px 0 16px 16px;
    width:100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
  }
  .course-container{
    width:100%;
    max-width: 1225px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap-reverse;
  }
  .main-head{
    width: 100%;
    height:220px;
  }
  .bac1{
    background-image: url('../../assets/image/CourseBack1.png');
  }
  .bac2{
    background-image: url('../../assets/image/CourseBack2.png');
  }
  .course-img{
    height: 50%;
    border-radius: 8px;
  }
  .head-content{
    backdrop-filter: blur(2px);
    width: 100%;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 60px;
    color: rgba(255, 255, 255, 0.7);
  }
  .course-main{
    width: 880px;
    flex: 1;
    min-width: 880px;
    min-height: 100px;
    background-color: white;
    border-radius: 16px;
    padding: 32px 0;
    margin-right: 16px;
  }
  .creater{
    width: 300px;
    height: 300px;
    border-radius: 16px;
    background-color: white;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    font-size: 1.3rem;
    margin-bottom: 16px;
    margin-right: 16px;
  }
  .description{
    width: 300px;
    height: 300px;
    border-radius: 16px;
    background-color: white;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    font-size: 1.3rem;
    margin-bottom: 16px;
    margin-right: 16px;
  }
  .course-aside{
    display: flex;
    flex-direction: column;
  }
  .course-info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 90%;
    padding-top: 16px;
  }
  </style>