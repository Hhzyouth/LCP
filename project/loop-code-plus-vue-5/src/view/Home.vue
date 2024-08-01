<script setup>
    import Header from "../components/Header.vue"
    import { useUserStore } from '@/store/user.js'
    import { ref } from 'vue'
    const coin=ref(0)
    const finishedTitle=ref(0)
    const rank=ref(600)
    const onlineNumber=ref(0)
    const Page=ref('1')

    const store=useUserStore()
</script>
<script>
const getWindowInfo = () => {
    if (window.innerWidth<=1041){
                const element = document.querySelector('.affix');
                element.style.display = 'none';
            }else{
                const element = document.querySelector('.affix');
                element.style.display = '';
            }
};


export default {
    data() {
        return {
            newTime: "",
            targetTime: "",
        }
    },
    mounted(){
        this.getTargetTime();
        this.getNowTime();//进入页面调用该方法获取当前时间
        clearInterval(myTimeDisplay );//销毁之前定时器
        var myTimeDisplay = setInterval(() => {
           this.getNowTime(); //每秒更新一次时间
        }, 1000);
        window.addEventListener('resize', getWindowInfo);
    },
    methods: {
        getNowTime() {
            var date = new Date();
            let t2=this.targetTime.getTime();
            let t1=date.getTime();
            let t=t2-t1
            if (t<0){
                t+=604800000
            }
            const d=parseInt(t/86400000)
            t=t%86400000
            const h=parseInt(t/3600000)
            t=t%3600000
            const m=parseInt(t/60000)
            t=t%60000
            const s=parseInt(t/1000)
            var time = d + '天' + h + '时' + m + '分' + s + "秒";
            this.newTime = time;
        },
        getTargetTime(){
            let sunday = new Date();
            const nowDay = (new Date()).getDay() || 7;
            sunday.setDate(sunday.getDate() - nowDay + 7);
            sunday.setHours(9)
            sunday.setMinutes(0)
            sunday.setSeconds(0)
            this.targetTime=sunday
        },
       //小于10的拼接上0字符串
        addZero(s) {
            return s < 10 ? ('0' + s) : s;
        },
        
    },
    beforeDestroy(){
        window.removeEventListener("resize", getWindowInfo);
    }

}

</script>

<template>
    <div class="Header-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-main class="main">
                <div class="main-container">
                    <section class="main-body">
                        <div class="label">
                            <router-link class="label-title" to="/Library">
                                知识库 >
                            </router-link>
                            <div style="width: 80px;">
                                <hr style="height: 2px;background-color: black;border-radius: 95px;">
                            </div>
                        </div>
                        <div class="label-content">
                            <router-link class="knowledge-card" to="/Python/Python-introduction">
                                <p class="card-title">学习Python</p>
                                <div class="detail">
                                    <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                    <span class="text">
                                        Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                    </span>
                                </div>                            
                            </router-link>
                            <div class="knowledge-card">
                                <p class="card-title">学习Java</p>
                                <div class="detail">
                                    <img src="@/assets/knowledgeLogo/java.png" alt="" class="card-img">
                                    <span class="text">
                                        基于JVM虚拟机的跨平台语言，一次编写，到处运行
                                    </span>
                                </div>                            
                            </div>
                            <div class="knowledge-card">
                                <p class="card-title">学习C++</p>
                                <div class="detail">
                                    <img src="@/assets/knowledgeLogo/cpp-logo.png" alt="" class="card-img">
                                    <span class="text">
                                        一种计算机高级程序设计语言，由C语言扩展升级而产生
                                    </span>
                                </div>                            
                            </div>
                            <div class="knowledge-card">
                                <p class="card-title">学习C</p>
                                <div class="detail">
                                    <img src="@/assets/knowledgeLogo/c-logo.png" alt="" class="card-img">
                                    <span class="text">
                                        一种通用的、面向过程式的计算机程序设计语言
                                    </span>
                                </div>                            
                            </div>
                            <div class="knowledge-card">
                                <p class="card-title">学习C#</p>
                                <div class="detail">
                                    <img src="@/assets/knowledgeLogo/cs-logo.png" alt="" class="card-img">
                                    <span class="text">
                                        适用于 .NET 开发者平台的、面向对象的新式开源跨平台编程语言
                                    </span>
                                </div>                            
                            </div>
                            <div class="knowledge-card">
                                <p class="card-title">学习Dart</p>
                                <div class="detail">
                                    <img src="@/assets/knowledgeLogo/dart.png" alt="" class="card-img">
                                    <span class="text">
                                        一个易用、可移植且高效的语言，在全平台开发高质量的应用程序
                                    </span>
                                </div>                            
                            </div>
                        </div>

                        <div class="label">
                            <router-link class="label-title" to="/Competition">
                                竞赛 >
                            </router-link>
                            <div style="width: 80px;">
                                <hr style="height: 2px;background-color: black;border-radius: 95px;">
                            </div>
                            <div class="label-content">
                                <div class="race-card">
                                    <div v-if="store.token!==''" class="progress">
                                        <el-progress type="dashboard" :percentage="rank/10" :width="80" :height="80" define-back-color="#bebebe" stroke-width="8">
                                            <template #default="{ percentage }">
                                                <span class="percentage-value">{{ percentage*10 }}</span>
                                                <span class="percentage-label">排位分</span>
                                            </template>
                                        </el-progress>
                                    </div>
                                    <img v-else src="@/assets/icon/MaterialSymbolsMilitaryTechOutlineRounded.svg   " alt="">
                                    <div class="race-detail">
                                        <p style="margin: 0;font-size: 1.2rem;">
                                            单人匹配
                                        </p>
                                        <span style="font-size: 0.8rem;">
                                            在线人数: {{ onlineNumber }}
                                        </span>
                                    </div>                         
                                </div>
                                <div class="race-card">
                                    <img src="@/assets/icon/MaterialSymbolsTrophyOutline.svg" alt="">
                                    <div class="race-detail">
                                        <p style="margin: 0;font-size: 1.2rem;">
                                            代码竞赛
                                        </p>
                                        <span style="font-size: 0.8rem;">
                                            距下一场公开赛: 
                                        </span>
                                        <span style="font-size: 0.6rem;">
                                            {{ newTime }}
                                        </span>
                                    </div>                            
                                </div>
                            </div>
                        </div>

                        <div class="label">
                            <router-link class="label-title" to="/Course">
                                课堂 >
                            </router-link>
                            <div style="width: 80px;">
                                <hr style="height: 2px;background-color: black;border-radius: 95px;">
                            </div>
                            <div class="label-content">
                                <div class="course-card">
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
                                <div class="course-card">
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
                                <div class="course-card">
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
                                <div class="course-card">
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
                                <div class="course-card">
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
                                <div class="course-card">
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
                            </div>
                        </div>

                        <div class="label">
                            <span class="label-title">
                                工具 >
                            </span>
                            <div style="width: 80px;">
                                <hr style="height: 2px;background-color: black;border-radius: 95px;">
                            </div>
                            <div class="label-content">
                                <a href="https:/store.steampowered.com/" target="_blank">
                                    <div class="tool-card">
                                        <img src="@/assets/toolicon/Steam.png" alt="" class="toolcard-img">
                                        <span class="tool-name">欢迎来到Steam</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </section>
                    <div class="affix">
                        <el-affix :offset="80">
                            <section class="body-side">
                                <section class="calendar">
                                    <el-calendar ref="calendar" style="--el-calendar-border: none;">
                                        <template #header="{ date }">
                                            <span>{{ date }}</span>
                                        </template>
                                        <template #date-cell="{ data }">
                                            <span :class="data.isSelected ? 'is-selected' : ''">
                                                {{ data.day.split('-').slice(2)[0] }}
                                            </span>
                                        </template>
                                    </el-calendar>
                                    <section v-if="store.token!==''" class="extra">
                                        <div class="items">
                                            <img src="@/assets/icon/MaterialSymbolsTollOutlineRounded.svg" alt="" class="svgs">
                                            <p class="svg-description">积分</p>
                                            <p class="svg-num" >{{ coin }}</p>
                                        </div>
                                        <div class="items">
                                            <img src="@/assets/icon/MaterialSymbolsContractEditRounded.svg" alt="" class="svgs">
                                            <p class="svg-description">已完成题数</p>
                                            <p class="svg-num">{{ finishedTitle }}</p>
                                        </div>
                                        <div class="items">
                                            <img src="@/assets/icon/MaterialSymbolsBarChartRounded.svg" alt="" class="svgs">
                                            <p class="svg-description">排位分</p>
                                            <p class="svg-num">{{ rank }}</p>
                                        </div>
                                    </section>
                                    <section v-else class="extra-nologin">
                                        <div>
                                            欢迎你！ LoopCoder
                                        </div>
                                        <router-link class="login" to="/Login">
                                            注册 / 登录
                                        </router-link>
                                    </section>
                                </section>
                            </section>
                        </el-affix>     
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
    .Header-Main-container{
        margin: 0;
        padding: 0;
        height: 100vh;
    }
    .elcontainer{
        height: 100%;
    }
    .header{
        /* width: 100%; */
        padding: 0;
        background-color: #071727;
    }
    .body-side{
        width: 350px;
        margin: 0 8px;
    }
    .main-container{
        padding-left: 50px;
        margin: 20px auto;
        display: flex;
        justify-content: center;
    }
    .main-body{
        width: 800px;
        margin: 0 8px;
    }
    .extra{
        width: 300px;
        display: flex;
        justify-content: space-evenly;
    }
    .svgs{
        width:40px;
        margin: 0 auto;
        
    }
    .svg-description{
        margin: 0;
        color: dimgray;
    }
    .items{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90px;
    }
    .svg-num{
        margin: 8px 0;
    }
    .knowledge-card{
        background-color: rgba(239, 239, 239, 0.5);
        width: 230px;
        height: 85px;
        border-radius: 8px;
        padding: 10px;
        box-sizing: border-box;
        flex-shrink: 0;
        margin:0 20px 20px 0;
        transition-delay: 0.1s;
    }
    .knowledge-card:hover{
        background-color: rgba(239, 239, 239, 1);
        /* box-shadow: 0px 0px 10px #dadada; */
        cursor: pointer;
        transition-delay: 0s;
    }
    .card-title{
        margin: 0;
    }
    .card-img{
        height: 40px;
        width: 40px;
    }
    .detail{
        display: flex;
        justify-content: center;
        padding: 4px 0;
    }
    .text{
        font-size: 11px;
        padding: 2px;
    }
    .label-content{
        display: flex;
        flex-wrap: wrap;
    }
    .label-title{
        font-size: 1.2rem;
    }
    .race-card{
        background-color: rgba(239, 239, 239, 0.5);
        width: 14.5rem;
        height: 85px;
        border-radius: 8px;
        padding: 8px;
        box-sizing: border-box;
        flex-shrink: 0;
        margin:0 20px 20px 0;
        display: flex;
        justify-content: space-evenly;
        transition-delay: 0.1s;
    }
    .race-card:hover{
        background-color: rgba(239, 239, 239, 1);
        /* box-shadow: 0px 0px 10px #dadada; */
        cursor: pointer;
        transition-delay: 0s;
    }
    .percentage-value {
        display: block;
        margin-top: 3px;
        font-size: 24px;
    }
    .percentage-label {
        display: block;
        margin-top: 5px;
        font-size: 12px;
    }
    .race-detail{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .course-card{
        background-color: #0000000a;
        width: 230px;
        height: 260px;
        border-radius: 8px;
        box-sizing: border-box;
        flex-shrink: 0;
        margin:0 20px 20px 0;
        transition-delay: 0.1s;
    }
    .course-card:hover{
        box-shadow: 0px 0px 20px #dadada;
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
    .toolcard-img{
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
    .tool-card{
        width: 150px;
        height: 50px;
        background-color: rgba(239, 239, 239, 0.5);
        border-radius: 8px;
        padding: 8px;
        display: flex;
        align-items: center;
        margin:0 15px 15px 0;
        color: #213547;
    }
    .tool-card:hover{
        background-color: rgba(239, 239, 239, 1);
        cursor: pointer;
    }
    .tool-name{
        font-size: 0.8rem;
    }
    .affix{
        width: 365.95px;
    }
    
</style>
<style>
    .el-calendar-table .el-calendar-day{
        height: 50px;
        padding: 5px;
        margin: 3px;
        border-radius: 15px;
        text-align: center;
    }
    .el-calendar-table:not(.is-range) td.next, .el-calendar-table:not(.is-range) td.prev{
        pointer-events: none;
    }
    .el-calendar__body{
        padding-bottom: 10px;
    }
    .is-selected {
        color: #1989fa;
        border-radius: 15px;
    }
    .calendar{
        width: 300px;
        border: 1px solid white;
        box-shadow: 0px 0px 10px #e0e0e0;
        border-radius: 15px;
        padding: 5px;
    }
    .el-progress-circle__track {
        stroke: #bebebe;
    }
    .extra-nologin{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    .login{
        margin: 10px 0;
        background-color: #071727cc;
        color: white;
        border-radius: 8px;
        padding :4px 40px;
    }
    .login:hover{
        color: white;
    }
</style>
