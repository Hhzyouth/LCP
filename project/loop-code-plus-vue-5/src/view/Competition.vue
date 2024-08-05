<template>
    <div class="Header-Main-container">
        <div class="elcontainer">
            <el-container>
                <el-header class="header">
                    <Header :page="Page"/>
                </el-header>
                <el-main class="elmain">
                    <div class="elmain-content">
                        <div class="top">
                            <div class="h-container">
                                <h1 class="text">
                                    LoopCodePlus 竞赛
                                </h1>
                            </div>
                        </div>
                        <div class="main-body">
                            <div class="match-card">
                                <div class="entry" @click="singleMatchJoin=true">
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
                                    <div class="ranking-item">
                                        <div class="border">
                                            <div class="header-item-content">
                                                <div class="item-content-container">
                                                    <span>排名</span>
                                                </div>
                                                <div class="item-content-container">
                                                    <span>头像</span> 
                                                </div>
                                                <div class="item-content-container">
                                                    <span>昵称</span> 
                                                </div>
                                                <div class="item-content-container">
                                                    <span>胜场</span>
                                                </div>
                                            </div>
                                            <div class="border-line"></div>
                                        </div>
                                    </div>
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
                                    <div class="ranking-item">
                                        <div class="border">
                                            <div class="header-item-content">
                                                <div class="item-content-container">
                                                    <span>排名</span>
                                                </div>
                                                <div class="item-content-container">
                                                    <span>头像</span> 
                                                </div>
                                                <div class="item-content-container">
                                                    <span>昵称</span> 
                                                </div>
                                                <div class="item-content-container">
                                                    <span>胜场</span>
                                                </div>
                                            </div>
                                            <div class="border-line"></div>
                                        </div>
                                    </div>
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
                                            代码竞赛
                                        </p>
                                        <p  class="content-text">
                                            距下一场周赛: {{ newTime }}
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
                                    <div class="ranking-item">
                                        <div class="border">
                                            <div class="header-item-content">
                                                <div class="item-content-container">
                                                    <span>排名</span>
                                                </div>
                                                <div class="item-content-container">
                                                    <span>头像</span> 
                                                </div>
                                                <div class="item-content-container">
                                                    <span>昵称</span> 
                                                </div>
                                                <div class="item-content-container">
                                                    <span>胜场</span>
                                                </div>
                                            </div>
                                            <div class="border-line"></div>
                                        </div>
                                    </div>
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
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>



    <!-- ------------------------------------------------------------------------------ -->
    <el-dialog v-model="singleMatchJoin" title="单人匹配" width="500" class="single-match-join" :show-close="!singleLoading" :close-on-click-modal="false" :close-on-press-escape="false">
        <div>
            <div class="ban">
                <div class="ban-title">ban位1:</div>
                <el-cascader v-model="ban1" :options="options" :show-all-levels="false" placeholder="禁用某一类型题目" :clearable="true"/>
            </div>
            <div class="ban">
                <div class="ban-title">ban位2:</div>
                <el-cascader v-model="ban2" :options="options" :show-all-levels="false" :placeholder="vipBan ? '禁用某一类型题目' : '仅VIP用户可用'" :disabled="!vipBan" :clearable="true"/>
            </div>
            <div class="ban">
                <div class="ban-title">ban位3:</div>
                <el-cascader v-model="ban3" :options="options" :show-all-levels="false" :placeholder="vipBan ? '禁用某一类型题目' : '仅VIP用户可用'" :disabled="!vipBan" :clearable="true"/>
            </div>
            <div class="ban">
                <div class="ban-title">直选:</div>
                <el-cascader v-model="select1" :options="options" :show-all-levels="false" :placeholder="vipBan ? '直接选定某一类型题目' : '仅VIP用户可用'" :disabled="!vipBan" :clearable="true"/>
            </div>
            
        </div>
        <template #footer>
        <div class="dialog-footer">
            <el-button @click='singleSuccess'>成功</el-button>
            <el-button @click='singleFail'>失败</el-button>
            <el-button @click="singleLoading = false;singleText='开始匹配'" v-show="singleLoading">取消</el-button>
            <el-button :type="singleType" @click="singleLoading = true;singleText='匹配中';singleType='primary'" :loading="singleLoading" :disabled='singleDisabled'>
                <template #loading>
                    <div class="custom-loading">
                        <svg class="circular" viewBox="-10, -10, 50, 50">
                        <path
                            class="path"
                            d="
                            M 30 15
                            L 28 17
                            M 25.61 25.61
                            A 15 15, 0, 0, 1, 15 30
                            A 15 15, 0, 1, 1, 27.99 7.5
                            L 15 15
                        "
                            style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"
                        />
                        </svg>
                    </div>
                </template>
            {{singleText}}
            </el-button>
        </div>
        </template>
    </el-dialog>
</template>
  

<script setup>
    import Header from "../components/Header.vue"
    import { useUserStore } from "../store/user";
    import { ref } from 'vue'

    const store = useUserStore()
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
    const singleMatchJoin=ref(false)
    const ban1 = ref('')
    const ban2 = ref('')
    const ban3 = ref('')
    const select1 = ref('')
    const vipBan = ref(store.role=='VIP')
    const singleLoading = ref(false)
    const singleType = ref('primary')
    const singleText = ref('开始匹配')
    const singleDisabled=ref(false)
    const singleSuccess=()=>{
        singleType.value='success'
        singleText.value='匹配成功'
        singleLoading.value=false
        singleDisabled.value=true
    }
    const singleFail=()=>{
        singleType.value='warning'
        singleText.value='没有匹配到对手'
        singleLoading.value=false
    }
    const options = [
    {
        value: '算法',
        label: '算法',
        children:[
            {value:'动态规划',label:'动态规划'},
            {value:'贪心',label:'贪心'},
            {value:'递归',label:'递归'},
            {value:'深度优先搜索',label:'深度优先搜索'},
            {value:'广度优先搜索',label:'广度优先搜索'},
        ]
    },
    {
        value: '数据结构',
        label: '数据结构',
        children: [
            {value:'哈希表',label:'哈希表'},
            {value:'树',label:'树'},
            {value:'二叉树',label:'二叉树'},
            {value:'堆',label:'堆'},
            {value:'栈',label:'栈'},
            {value:'图',label:'图'},
        ]
    },
    ]
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
  from {opacity: 0;}
  to {opacity: 1;}
}

/*添加动画*/
.text{
    color: white;
}
.elmain{
    padding:0;
    overflow-x:auto;
    height:calc(100vh - 60px);
}
.elmain-content{
    padding:8px;
    box-sizing:border-box;
    min-width: 1350px;
    background-color: rgba(239, 239, 239, 0.5);
}
.h-container{
    width:100%;
    height:100%;
    backdrop-filter: blur(4px);
    border-radius:8px;
    display:flex;
    align-items:center;
    justify-content:center;
}
.top{
    border-radius: 8px;
    background-image: url('../assets/image/bg-matchTop.png');
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Header-Main-container{
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
    cursor: pointer;
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
.header-item-content{
    width: 100%;
    padding: 0 25px 5px 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
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
.ban{
    display: flex;
    align-items: center;
    padding: 8px;
}
.ban-title{
    padding-right: 8px;
    width: 60px;
    text-align: center;
}
.el-button .custom-loading .circular {
  margin-right: 6px;
  width: 18px;
  height: 18px;
  animation: spin 2s linear infinite;
}
.el-button .custom-loading .circular .path {
  animation: loading-dash 1.8s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #ffffff;
  stroke-linecap: round;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}

</style>
<style>
.single-match-join{
    border-radius: 16px;
}
</style>