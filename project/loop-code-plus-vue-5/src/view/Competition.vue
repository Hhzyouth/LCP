<template>
    <div class="Header-Aside-Main-container">
        <div class="elcontainer">
            <el-container>
                <el-header class="header">
                    <Header :page="Page"/>
                </el-header>
                <el-main class="elmain">
                    <div class="top">
                        <h1 class="text">
                            LoopCodePlus 竞赛
                        </h1>
                    </div>
                    <div class="main-body">
                        <div class="match-card">
                            <div class="entry">
                                <img src="../assets/image/bg-match1.png" alt="">
                                <div class="content">
                                    <p class="content-title">
                                        单人匹配
                                    </p>
                                    <p  class="content-text">
                                        你将与另一位参赛者比拼完成1道随机题目的速度与质量
                                    </p>
                                </div>
                            </div>
                            <div class="top-three">
                                <div id="second">
                                    <div class="frame" style="height: 105px;width: 105px;">
                                        <el-avatar shape="circle" :size="90" :src="''" /> 
                                    </div>
                                </div>
                                <div id="first">
                                    <div class="frame" style="height: 135px;width: 135px;">
                                        <el-avatar shape="circle" :size="120" :src="''" /> 
                                    </div>
                                </div>
                                <div id="third">
                                    <div class="frame" style="height: 105px;width: 105px;">
                                        <el-avatar shape="circle" :size="90" :src="''" /> 
                                    </div>
                                </div>
                            </div>
                            <div class="ranking-list">
                                <div class="ranking-item" v-for="item in rankingList">
                                    <div class="border">
                                        <div class="item-content">
                                            <div class="item-content-container">
                                                <span>{{ item.ranking ?  item.ranking : "-"}}</span>
                                            </div>
                                            <div class="item-content-container">
                                                <el-avatar shape="circle" :size="30" :src="''" /> 
                                            </div>
                                            <div class="item-content-container">
                                                <span class="item-content-name">{{ item.name ?  item.name : "-"}}</span>
                                            </div>
                                            <div class="item-content-container">
                                                <span>{{ item.win ?  item.win : "-"}}</span>
                                            </div>
                                        </div>
                                        <div class="border-line"></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="match-card">
                            <div class="entry"  id="mul-entry">
                                <img src="../assets/image/bg-match2.png" alt="">
                                <div class="content">
                                    <p class="content-title">
                                        多人匹配
                                    </p>
                                    <p  class="content-text">
                                        你将与两名队友一起同对手比拼完成3道随机题目的速度与质量
                                    </p>
                                </div>
                            </div>
                            <div class="top-three">
                                <div id="second">
                                    <div class="frame" style="height: 105px;width: 105px;">
                                        <el-avatar shape="circle" :size="90" :src="''" /> 
                                    </div>
                                </div>
                                <div id="first">
                                    <div class="frame" style="height: 135px;width: 135px;">
                                        <el-avatar shape="circle" :size="120" :src="''" /> 
                                    </div>
                                </div>
                                <div id="third">
                                    <div class="frame" style="height: 105px;width: 105px;">
                                        <el-avatar shape="circle" :size="90" :src="''" /> 
                                    </div>
                                </div>
                            </div>
                            <div class="ranking-list">
                                <div class="ranking-item" v-for="item in rankingList">
                                    <div class="border">
                                        <div class="item-content">
                                            <div class="item-content-container">
                                                <span>{{ item.ranking ?  item.ranking : "-"}}</span>
                                            </div>
                                            <div class="item-content-container">
                                                <el-avatar shape="circle" :size="30" :src="''" /> 
                                            </div>
                                            <div class="item-content-container">
                                                <span class="item-content-name">{{ item.name ?  item.name : "-"}}</span>
                                            </div>
                                            <div class="item-content-container">
                                                <span>{{ item.win ?  item.win : "-"}}</span>
                                            </div>
                                        </div>
                                        <div class="border-line"></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="match-card">
                            <div class="entry" id="match-entry">
                                <img src="../assets/image/bg-match3.png" alt="">
                                <div class="content">
                                    <p class="content-title">
                                        周赛
                                    </p>
                                    <p  class="content-text">
                                        距下一场公开赛: {{ newTime }}
                                    </p>
                                </div>
                            </div>
                            <div class="top-three">
                                <div id="second">
                                    <div class="frame" style="height: 105px;width: 105px;">
                                        <el-avatar shape="circle" :size="90" :src="''" /> 
                                    </div>
                                </div>
                                <div id="first">
                                    <div class="frame" style="height: 135px;width: 135px;">
                                        <el-avatar shape="circle" :size="120" :src="''" /> 
                                    </div>
                                </div>
                                <div id="third">
                                    <div class="frame" style="height: 105px;width: 105px;">
                                        <el-avatar shape="circle" :size="90" :src="''" /> 
                                    </div>
                                </div>
                            </div>
                            <div class="ranking-list">
                                <div class="ranking-item" v-for="item in rankingList">
                                    <div class="border">
                                        <div class="item-content">
                                            <div class="item-content-container">
                                                <span>{{ item.ranking ?  item.ranking : "-"}}</span>
                                            </div>
                                            <div class="item-content-container">
                                                <el-avatar shape="circle" :size="30" :src="''" /> 
                                            </div>
                                            <div class="item-content-container">
                                                <span class="item-content-name">{{ item.name ?  item.name : "-"}}</span>
                                            </div>
                                            <div class="item-content-container">
                                                <span>{{ item.win ?  item.win : "-"}}</span>
                                            </div>
                                        </div>
                                        <div class="border-line"></div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>
  

<script setup>
import Header from "../components/Header.vue"
    import { ref } from 'vue'
    const Page=ref('3')
    const rankingList = ref(
    [
        {ranking:1,id:1001,name:"张三",win:186,avatar:""},
        {ranking:2,id:1025,name:"李四",win:116,avatar:""},
        {ranking:3,id:1081,name:"王五",win:96,avatar:""},
        {ranking:4,id:1019,name:"123",win:85,avatar:""},
        {ranking:5,id:1075,name:"456",win:57,avatar:""},
        {ranking:6,id:1014,name:"asdwd",win:23,avatar:""},
        {ranking:0,id:0,name:"",win:0,avatar:""},
        {ranking:0,id:0,name:"",win:0,avatar:""},
        {ranking:0,id:0,name:"",win:0,avatar:""},
        {ranking:0,id:0,name:"",win:0,avatar:""},
    ]
    )
</script>
<script>
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
}
</script>
<style scoped>
.header{
    padding: 0;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;

  }

  to {
    opacity: 1;

  }
}

/*添加动画*/
.text{
    color: rgb(207, 207, 207);
}
.elmain{
    background-color: rgba(239, 239, 239, 0.5);
}
.top{
    border-radius: 8px;
    background-color: #071727;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Header-Aside-Main-container{
    min-width: 1300px;
    height: 100vh;
}
.main-body{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding-top: 30px;
}
.match-card{
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 0 0 30%;
}
.entry{
    overflow: hidden;
    width: 95%;
    border-radius: 8px;
    position: relative;
    background-color: black;
    margin-bottom: 40px;
}
.entry img{
    max-width: 100%;
    height: 100%;
    transition: all 0.5s ease-out; /*ease-out 减速、慢慢结束*/
    -webkit-transition: all 0.5s ease-out;
    object-fit: cover;
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-name: fadeInLeft;
}
.entry:hover img{
    transform: scale(1.2); /*把图片放大1.5倍*/
    -webkit-transform: scale(1.2);
}
.entry:hover{
    box-shadow: 0 0 20px rgb(165, 165, 165);
}
.content{
    top: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    backdrop-filter: blur(2px);
    color: rgb(229, 229, 229)
}
.content-title{
    font-size: 3.5rem;
    margin: 0;
}
.content-text{
    font-size: 0.7rem;
}
.top-three{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: end;
    
}
#first .frame{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(#FDE985, #D8A90A);
}
#second .frame{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(#FDFDFD, #ADADAD);
}
#third .frame{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(#F9CCA0, #D87F47);
}
.ranking-list{
    width: 100%;
    padding: 20px 0;
    border-radius: 16px;
    background-color: #FAFAFA;
    box-shadow: 0 0 30px rgb(231, 231, 231);
    margin-top: 60px;
}
.item-content{
    width: 100%;
    padding: 15px 25px 5px 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
}
.item-content:hover{
    background-color: rgba(203, 213, 211, 0.20);
}
.border{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.border-line {
    height: 1px;
    width: 90%;
    background-color: rgba(209, 209, 209, 0.64);
}

.item-content-container{
    flex: 0 0 25%;
}
</style>