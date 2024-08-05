<template>
    <div class="Header-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-main class="el-main">
                <div class="main-container">
                    <div class="top-area">
                        <div class="top-input">
                            <input class="input" type="text" v-model="input" placeholder="搜索"/>
                            <div class="icon-container"><el-icon size="24"><Search /></el-icon></div>
                        </div>
                        <div class="tabs">
                            <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                                <el-tab-pane name="problem">
                                    <template #label>
                                        <span class="custom-tabs-label">
                                            <el-icon><Tickets /></el-icon>
                                            <span>题目</span>
                                        </span>
                                    </template>
                                </el-tab-pane>
                                <el-tab-pane name="user">
                                    <template #label>
                                        <span class="custom-tabs-label">
                                            <el-icon><User /></el-icon>
                                            <span>用户</span>
                                        </span>
                                    </template>
                                </el-tab-pane>
                                <el-tab-pane name="library">
                                    <template #label>
                                        <span class="custom-tabs-label">
                                            <el-icon><Reading /></el-icon>
                                            <span>知识库</span>
                                        </span>
                                    </template>
                                </el-tab-pane>
                                <el-tab-pane name="course">
                                    <template #label>
                                        <span class="custom-tabs-label">
                                            <el-icon><DataAnalysis /></el-icon>
                                            <span>课程</span>
                                        </span>
                                    </template>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                    <div class="result" v-if="activeName=='problem'">
                        <el-empty description="没有相关数据" />
                    </div>
                    <div class="result" v-else-if="activeName=='user'">
                        你好
                    </div>
                </div>
                
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute()
    const { q } = route.params;
    const input =ref('')
    input.value=q
    const Page=ref()

    const activeName = ref('problem')

    const handleClick = (tab, event) => {
        console.log(activeName)
    }
</script>

<style scoped>
    .Header-Main-container{
        margin: 0;
        padding: 0;
        height: 100vh;
        
    }
    .header{
        padding: 0;
    }
    .elcontainer{
        height: 100%;
    }
    .main-container{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0;
    }
    .top-input{
        padding: 2rem 0 0 0;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: white;
    }
    .input{
        width: 40%;
        height: 40px;
        font-size: 1.5rem;
        border-radius: 50px;
        padding-left: 15px;
        border: 2px solid #88888b;
    }
    .icon-container{
        width: 45px;
        height: 45px;
        border-radius: 50px;
        
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 12px
    }
    .icon-container:hover{
        background-color: #d1d1d1;
        cursor: pointer;
    }
    .el-main{
        padding: 0;
        background-color: rgba(239, 239, 239, 0.5);
    }
    .top-area{
        width: 100%;
    }
    .tabs{
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2rem;
    }
    .demo-tabs{
        width: 80%;
    }
    .custom-tabs-label{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
    }
    .result{

    }
</style>
<style>
    .el-tabs__item.is-active {
        color: #ffd04b;
    }
    .el-tabs__item:hover {
        color: #ffd04b;  
        cursor: pointer;  
    }
    .el-tabs__active-bar{
        background-color: #ffd04b;
    }
</style>