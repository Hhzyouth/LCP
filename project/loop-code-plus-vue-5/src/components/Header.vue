<template>
    <div class="head-container" ref="watchmenu">
        <el-menu
            :default-active="activeIndex"
            class="top-menu"
            mode="horizontal"
            background-color="#071727"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="handleSelect"
            :ellipsis="false"
        >   
            <span class="logo-container">
                <img src="../assets/image/main-logo.png" id="main-logo" @click="imgToHome">
            </span>
            <el-menu-item index="1" style="font-size: 1rem;" class="menu-item">主页</el-menu-item>
            <el-menu-item index="2" style="font-size: 1rem;" class="menu-item">知识库</el-menu-item>
            <el-menu-item index="3" style="font-size: 1rem;" class="menu-item">竞赛</el-menu-item>
            <el-menu-item index="4" style="font-size: 1rem;" class="menu-item">课堂</el-menu-item>
            <el-menu-item index="5" style="font-size: 1rem;" class="menu-item">题库</el-menu-item>
            <el-menu-item index="6" style="font-size: 1rem;" class="menu-item">商店</el-menu-item>
            <div class="flex-grow" />
            <div class="top-menu-right">
                <div class="top-input">
                    <el-input class="input" v-model="input" style="width: 240px" placeholder="搜索" :prefix-icon="Search" @keyup.enter.native="Searchit()"/>
                </div>
                <el-popover v-if="store.token!==''" placement="bottom" :width="280" trigger="click" popper-class="popover" :offset="20" popper-style="border-radius: 0.8rem;">
                    <template #reference>
                        <el-avatar :src="store.avatar" style="width: 30px;height: 30px;"/>
                    </template>
                    <div class="information">
                        <div class="information-left">
                            <el-avatar :src="store.avatar" style="width: 70px;height: 70px;margin-right: 10px;"/>
                            <div class="detials">
                                <p id="nickname">{{store.nickname}}</p>
                                <span id="title">{{store.title}}</span>
                            </div>
                        </div>
                        <div class="toSetting">
                            <el-icon><ArrowRight /></el-icon>
                        </div>
                    </div>
                    <div class="tools">
                        <router-link class="tool" to="/MySolution">
                            <img src="@/assets/icon/MaterialSymbolsMarkChatReadOutlineRounded.svg" alt="" class="tool-img">
                            <span class="tool-name">我的题解</span>
                        </router-link>
                        <router-link class="tool" to="/MyProblem">
                            <img src="@/assets/icon/MaterialSymbolsClarifyOutlineRounded.svg" alt="" class="tool-img">
                            <span class="tool-name">我的题目</span>
                        </router-link>
                        <router-link class="tool" to="/LCPlab">
                            <img src="@/assets/icon/MaterialSymbolsTerminalRounded.svg" alt="" class="tool-img">
                            <span class="tool-name">LCPlab</span>
                        </router-link>
                        <div class="tool">
                            <img src="@/assets/icon/MaterialSymbolsBackpackOutlineRounded.svg" alt="" class="tool-img">
                            <span class="tool-name">背包</span>
                        </div>
                        <div class="tool">
                            <img src="@/assets/icon/MaterialSymbolsVerifiedOutline.svg" alt="" class="tool-img">
                            <span class="tool-name">成就</span>
                        </div>
                        <div class="tool">
                            <img src="@/assets/icon/MaterialSymbolsMarkdownCopyOutlineRounded.svg" alt="" class="tool-img">
                            <span class="tool-name">我的竞赛</span>
                        </div>
                    </div>
                    <div class="tool-bar">
                        <div class="bar">
                            <img src="@/assets/icon/MaterialSymbolsMarkdownCopyOutlineRounded.svg" alt="" class="tool-img">
                            <span class="tool-name">设置</span>
                        </div>
                        <div class="bar" @click="exit">
                            <img src="@/assets/icon/MaterialSymbolsExitToAppRounded.svg" alt="" class="tool-img">
                            <span class="tool-name">退出</span>
                        </div>
                    </div>
                </el-popover>
                <router-link v-else style="color: white;" to="/Login">注册 / 登录</router-link>
                <el-popover v-if="store.token!==''" placement="bottom" :width="480" trigger="click" popper-class="popover" :offset="20" popper-style="height: 400px; overflow: auto;border-radius: 0.8rem;">
                    <template #reference>
                        <el-icon style="width: 25px; height:25px; color: white;margin-left: 15px;"><Bell /></el-icon>
                    </template>
                    <div class="notices">
                        <div class="notice" v-for="item in noticeItems">
                            <div class="message">
                                <span v-if="item.type===1" class="notice-container">
                                    <img src="@/assets/icon/MaterialSymbolsRewardedAdsOutlineRounded.svg" alt="" class="notice-img">
                                    <span class="notice-content">{{ item.content }}</span>
                                </span>
                                <span v-else-if="item.type===2" class="notice-container">
                                    <img src="@/assets/icon/MaterialSymbolsInfoOutlineRounded.svg" alt="" class="notice-img">
                                    <span class="notice-content">{{ item.content }}</span>
                                </span>
                                <hr style="border: 1px solid rgba(239, 239, 239, 1);">
                            </div>
                        </div>
                    </div>
                </el-popover>
            </div>
            
        </el-menu>
    </div>
</template>

<script setup>
    import { ref, toRefs, defineProps } from 'vue'
    import { Search } from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router'
    import { useUserStore } from '@/store/user.js'
    const router =useRouter()
    const props = defineProps({
    //子组件接收父组件传递过来的值
        page: String,
    })
    const {page} =toRefs(props)
    const activeIndex = page
    const imgToHome =()=>router.push('/')
    const handleSelect = (key, keyPath) => {
        switch (key) {
            case '1':
                router.push('/')
                break;
            case '2':
                router.push('/Library')
                break;
            case '3':
                router.push('/Competition')
                break;
            case '4':
                router.push('/Course')
                break;
            case '5':
                router.push('/Problem')
                break;
            case '6':
            router.push('/Store')
                break;
            default:
                break;
        }
    }
    const input = ref('')
    function Searchit() {
        console.log(123);
        if (input.value!==''){
            router.push({ path: `/Search/${input.value}`});
        }   
    }
    const noticeItems = [
        {type:1,content:"这是一条示例消息"},
        {type:2,content:"这是一条超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超长的示例消息"},
        {type:1,content:"这是一条示例消息"},
        {type:1,content:"这是一条示例消息"},
        {type:2,content:"这是一条超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超长的示例消息"},
        {type:1,content:"这是一条示例消息"},
        {type:1,content:"这是一条示例消息"},
        {type:2,content:"这是一条超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超长的示例消息"},
        {type:1,content:"这是一条示例消息"},
        {type:1,content:"这是一条示例消息"},
        {type:2,content:"这是一条超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超超长的示例消息"},
        {type:1,content:"这是一条示例消息"},
    ]

    const store=useUserStore()
    console.log(store.title);
    const exit=()=>{
        console.log("=====Exit=====");
        store.setToken({token:''})
    }
    
</script>
<script>
export default {
    data(){
        return {
            clientWidth:document.body.clientWidth,
            popoverDisplay:["none","none"],
            cur:3,
        }
    },
    mounted(){
        let that = this;
        window.onresize =() =>{
            return (()=>{
                window.clientWidth = document.body.clientWidth;
                that.clientWidth = window.clientWidth;
            })()
        };
        const wid=document.body.clientWidth
        if (wid<=650){
            document.querySelectorAll('.menu-item').forEach((item)=>{
                item.style.display = 'none'
            })
        }else if(wid>650 && wid<=1030){
            document.querySelectorAll('.menu-item').forEach((item)=>{
                item.style.display = 'flex'
            })
            document.querySelector('.top-menu-right').style.display = 'none';
        }else{
            document.querySelector('.top-menu-right').style.display = 'flex';
        }
    },
    watch:{
        clientWidth(newVal,oldVal){
            if (newVal<=650 && oldVal>650){
                    document.querySelectorAll('.menu-item').forEach((item)=>{
                        item.style.display = 'none'
                    })
                    document.querySelector('.top-menu-right').style.display = 'none';
                    document.querySelectorAll('.popover').forEach((popover,index)=>{
                        if (popover.style.display!=='none'){
                            this.popoverDisplay[index]='block';
                        }
                        popover.style.display = 'none';
                    })
                    this.cur=1
                }else if((oldVal<=650 || oldVal>1030) && newVal>650 && newVal<=1030){
                    document.querySelectorAll('.menu-item').forEach((item)=>{
                        item.style.display = 'flex'
                    })
                    document.querySelector('.top-menu-right').style.display = 'none';
                    document.querySelectorAll('.popover').forEach((popover,index)=>{
                        if (popover.style.display!=='none'){
                            this.popoverDisplay[index]='block';
                        }
                        popover.style.display = 'none';
                    })
                    this.cur=2
                }else if(oldVal<=1030 && newVal>1030){
                    document.querySelectorAll('.menu-item').forEach((item)=>{
                        item.style.display = 'flex'
                    })
                    document.querySelector('.top-menu-right').style.display = 'flex';
                    document.querySelectorAll('.popover').forEach((popover,index)=>{
                        if (popover.style.display==='none' && this.cur!==3){
                            popover.style.display = this.popoverDisplay[index];
                        }else{
                            this.popoverDisplay[index] = popover.style.display;
                        }
                    })
                    this.cur=3
                }
            
        }
    }
}

</script>
<style>
    #main-logo{
        height: 30px;
    }
    .logo-container{
        height: 59px;
        object-fit: cover;
        align-items: center;
        justify-content: center;
        display: flex;
        padding-right: 20px;
    }
    .top-menu{
        padding-left: 32px;
        padding-right: 32px;
    }
    .flex-grow {
        flex-grow: 1;
    }
    .top-menu-right{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top-input{
        padding-right: 40px;
    }
    .head-container{
        border:0;
        background-color: #071727;
    }
    .el-menu--horizontal.el-menu{
        border-bottom:0;
    }
    .popover .el-popper__arrow{
        display: none;
    }
    .popover{
        box-shadow: 0px 1px 3px #0000000a, 0px 10px 28px -4px #00000029;
    }
    .information{
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
    .information-left{
        display: flex;
        align-items: center;
    }
    #nickname{
        margin: 5px 0px;
        font-size: 1.5em;
    }
    .toSetting{
        width: 32px;
        height: 32px;
        border-radius: 10px;
        border: 1px solid white;
        box-shadow: 0 0 5px #aaaaaa;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .toSetting:hover{
        cursor: pointer;
    }
    #title{
        color: #FAB900;
    }
    .tool{
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(239, 239, 239, 0.5);
        border-radius: 8px;
        margin-bottom: 10px;
        color: #606266;
    }
    .tool:hover{
        background-color: rgba(239, 239, 239, 1);
        cursor: pointer;
        color: #071727;
    }
    .tools{
        display: flex;
        justify-content: space-evenly;
        margin-top: 20px;
        flex-wrap: wrap;
    }
    .bar{
        height: 42px;
        width: 90%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding-left: 8px;
        box-sizing: border-box;
        margin-bottom: 5px;
    }
    .bar:hover{
        background-color: rgba(239, 239, 239, 0.5);
        cursor: pointer;
    }
    .tool-bar{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .notice-container{
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: 8px;
    }
    .notice-container:hover{
        background-color: rgba(239, 239, 239, 0.3);
        cursor: pointer;
    }
    .notice-img{
        padding-right: 8px;
    }
</style>