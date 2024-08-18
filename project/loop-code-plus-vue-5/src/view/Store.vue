<template>
    <div class="Header-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-main class="main">
                <div class="main-header">
                    <div class="store-header">
                        <img src="../assets/image/main-logo.png" alt="" style="width: 300px;">
                        <div style="display: flex;justify-content: center;align-items: center;height: 110px">
                            <h1 class="title">
                                商店
                            </h1>
                        </div>
                        
                    </div>
                </div>
                <div class="store-container">
                    <el-skeleton
                        class="first-box"
                        style="display: flex; gap: 8px"
                        :loading="loading"
                        :animated="animated"
                        :count="6"
                        >
                        <template #template>
                            <div class="second-box">
                                <div class="third-box">
                                    <el-skeleton-item variant="image" style="height: 275px;width: 275px;" />
                                    <div style="padding: 14px">
                                        <el-skeleton-item variant="h3" style="width: 40%" />
                                        <el-skeleton-item variant="h3" style="width: 70%" />
                                        <el-skeleton-item variant="h3" style="width: 50%" />
                                        <div
                                        style="
                                            display: flex;
                                            justify-content: end;
                                            margin-top: 16px;
                                            height: 16px;
                                        "
                                        >
                                            <el-skeleton-item variant="text" style="width: 20%" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template #default>
                            <div class="first-box">
                                <div class="second-box" v-for="{commodityName,stock,commodityId,description,price,picture} in data" >
                                    <div class="third-box">
                                        <img :src="'/api'+picture" alt="">
                                        <div class="price"><el-icon><Coin /></el-icon>{{price}}</div>
                                        <div class="name">{{commodityName}}</div>
                                        <div class="quantity">数量:{{stock}}</div>
                                        <el-button type="success" class="buy" plain>购买</el-button>
                                    </div>
                                    <div :id="commodityId" class="discription">
                                        <div :id="'d'+commodityId" class="dis-container">
                                            <div class="discription-text">{{description}}</div>
                                        </div>
                                        <a class="extends"  @click="extend(commodityId)">{{ lst.has(commodityId)? '收起' : '详情'}}</a>  
                                    </div>
                                </div>
                                <div style="display: flex;width: 100%;justify-content: center;">
                                    <el-pagination background layout="prev, pager, next" :page-count="PageCount" class="pagination" @change="handelCurrentChange"
                                    v-model:current-page="currentPage"  />
                                </div>
                            </div>
                        </template>
                    </el-skeleton>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
  

<script setup>
    import Header from "../components/Header.vue"
    import { ref } from 'vue'
    import { getCurrentPageGoods } from "@/api/store.js";
    const Page=ref('6')
    const data= ref([])
    const currentPage=ref(1)
    const loading = ref(true)
    const PageCount=ref(1)
    const animated=ref(true)
    const getGoods=()=>{
        data.value=[]
       getCurrentPageGoods(
            currentPage.value
        ).then(function (response) {
            console.log(response)
            loading.value=false
            data.value=response.data.data
            PageCount.value=Math.ceil(response.data.num/6)
        })
        .catch(function (error) {
            ElMessage.error('网络连接错误')
            animated.value=false
        })
    }
    getGoods()
    const lst=ref(new Set())
    const handelCurrentChange=()=>{
        for (let item of lst.value.keys()){
            document.getElementById('d'+item).style.display='none'
            document.getElementById(item).classList.toggle("active");
        }
        lst.value.clear()
        getGoods()
    }
    
    function extend(id) {
        const elem=document.getElementById(id)
        const e=document.getElementById('d'+id)
        if (!lst.value.has(id)){
            lst.value.add(id)
            elem.classList.toggle("active");
            e.style.display='flex'
        }else{
            lst.value.delete(id)
            e.style.display='none'
            elem.classList.toggle("active");
        }
    }
</script>


<style scoped>
    .Header-Main-container{
        height:100vh;
    }
    .elcontainer{
        height: 100%;
    }
    .header{
        padding: 0;
    }
    .store-container{
        width: 100%;
    }
    .first-box{
        width: 100%;
        margin: 30px 0px 50px;
        padding: 0 20px;
        flex-wrap: wrap; 
        display: flex;
        box-sizing: border-box;
        justify-content: start;
    }
    .second-box{
        max-width: 463.6px;
        display: flex;
        flex: 1 1 30%;
        width: 250px;
        margin: 20px 10px;
        justify-content: center;
    }
    .third-box{
        width: 275px;
        margin: 0;
        background-color: white;
    }
    .third-box img{
        object-fit: contain;
        width:275px;
        height:275px;
        background-color: rgba(239, 239, 239, 1);
    }
    .price{
        display: flex;
        align-items: center;
        color: #E49708;
        font-size: 20px;
        margin: 0 0 2px 15px;
    }
    .name{
        color: #071727;
        font-size: 18px;
        margin: 0 0 2px 15px;
    }
    .quantity{
        color: #666;
        font-size: 12px;
        margin: 0 0 15px 15px;
    }
    .buy{
        margin: 0 0 10px 10px;
    }
    .main{
        padding: 0;
        height: calc(100% - 60px);
        background-color: rgba(239, 239, 239, 0.5);
    }
    .pagination-container{
        display: flex;
        justify-content: center;
    }
    .pagination{
        padding: 40px;
    }
    .discription{
        position: relative;
        height: 100%;
        box-sizing: border-box;
        width: 0;
        background-color: white;
        transition: width 0.5s;
    }
    .discription.active{
        width: calc(100% - 275px); 
        padding: 8px;
    }
    .dis-container{
        word-wrap: break-word;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
    .discription-text{
        max-height: 365px;
        overflow-y: hidden;
    }
    .control{
        display: flex;
        justify-content: flex-end;
    }
    .extends{
        position: absolute;
        width: 33px;
        bottom: 5px;
        right: 5px;
        text-decoration: underline;
        color: gray;
    }
    .extends:hover {
        color: black;
        cursor: pointer;
    }
    
    .main-header{
        width: 100%;
        background: linear-gradient(315deg, rgb(30, 30, 30) 0 50%, rgb(50, 50, 50) 50% 100%);
        background-color: rgb(41, 41, 41);
        padding: 64px 0 32px 0;
    }
    .store-header{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title{
        font-size: 3rem;
        color: rgb(241, 187, 70);
        margin-bottom: 32px;
    }
</style>