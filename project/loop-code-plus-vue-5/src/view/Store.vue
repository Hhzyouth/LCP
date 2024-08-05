<template>
    <div Header-Aside-Main-container>
        <div class="elcontainer">
            <el-container>
                <el-header class="header">
                    <Header :page="Page"/>
                </el-header>
                <el-main class="main">
                    <div class="store-container">
                        <div class="first-box">
                            <div class="second-box" v-for="{title,price,id} in data" >
                                <div class="third-box">
                                    <img src="@/assets/image/course-Python.png" alt="">
                                    <div class="price">{{price}}积分</div>
                                    <div class="name">{{title}}</div>
                                    <a class="extends"  @click="extend(id)">展开</a>
                                    <el-button type="success" class="buy" plain>购买</el-button>
                                </div>
                                <div :id="id" class="discription">
                                    <div class="discription-text">描111述111111111111111111111111111111111111111111111111111111111111111122z</div>
                                    <div class="control">
                                        <a class="extends"  @click="extend(id)">收起</a>
                                    </div>
                                </div>
                            </div>
                            <el-pagination background layout="prev, pager, next" :total="totalItems" class="pagination" @change="handelCurrentChange"
                             v-model:current-page="currentPage"  />
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
    const Page=ref('5')
    const data= ref([
                {id:1, price: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:2, price: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:3, price: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:4, price: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:5, price: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:6, price: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},])
    const currentPage = ref(5)
    const totalItems = ref(100)
    function extend(id) {
         const elem=document.getElementById(id)
        if (elem.style.display==='flex'){
            elem.style.display='none'
        }else{
            elem.style.display='flex'
        }
    }
    
</script>


<style scoped>
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
        justify-content: center;
    }
    .second-box{
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
        width:275px ;
        height: 275px;
    }
    .price{
        color: rgb(228,57,60);
        font-size: 20px;
        margin: 5px 0 5px 5px;
    }
    .name{
        color: #666;
        font-size: 15px;
        margin: 2px 0 2px 5px;
    }
    .buy{
        margin-left: 210px;
        margin-bottom: 5px;
    }
    .main{
        background-color: rgba(239, 239, 239, 0.5);
    }
    .pagination{
        padding: 40px;
    }
    .discription{
        padding: 0 10px;
        width: 168.737px;
        background-color: white;
        word-wrap: break-word;
        display: none;
        flex-direction: column;
        justify-content: space-between;
    }
    .control{
        display: flex;
        justify-content: flex-end;
    }
    .extends{
        margin: 2px 0 2px 5px;
        text-decoration: underline;
        color: gray;
    }
    a:hover {
        color: black;
        cursor: pointer;
    }
</style>