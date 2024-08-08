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
                            <div class="second-box" v-for="{title,quantity,id} in data" >
                                <div class="third-box">
                                    <img src="@/assets/image/course-Python.png" alt="">
                                    <div class="name">{{title}}</div>
                                    <div class="quantity">数量:{{quantity}}</div>
                                    <a class="extends"  @click="extend(id)">展开</a>
                                    <el-button type="success" class="buy" plain>使用</el-button>
                                </div>
                                <div :id="id" class="discription">
                                    <div :id="'d'+id" class="dis-container">
                                        <div class="discription-text">描111述111111111111111111111111111111111111111111111111111111111111111122z</div>
                                        <div class="control">
                                            <a class="extends"  @click="extend(id)">收起</a>
                                        </div>    
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
    const Page=ref()
    const data= ref([
                {id:1, quantity: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:2, quantity: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:3, quantity: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:4, quantity: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:5, quantity: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},
                {id:6, quantity: 20, title: '测试名称', url: '@/assets/image/course-Python.png'},])
    const currentPage = ref(1)
    const totalItems = ref(100)
    const lst=new Set()
    function extend(id) {
        const elem=document.getElementById(id)
        const e=document.getElementById('d'+id)
        if (!lst.has(id)){
            lst.add(id)
            elem.classList.toggle("active");
            e.style.display='flex'
        }else{
            lst.delete(id)
            e.style.display='none'
            console.log(document.getElementById('d'+id).style.display);
            elem.classList.toggle("active");
        }
    }
    const disWidth=ref('0')
</script>


<style scoped>
    .Header-Aside-Main-container{
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
        object-fit: cover;
        width:275px;
        height:275px;
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
        height: calc(100% - 60px);
        background-color: rgba(239, 239, 239, 0.5);
    }
    .pagination{
        padding: 40px;
    }
    .discription{
        max-height: 392.98px;
        box-sizing: border-box;
        width: 0;
        background-color: white;
        transition: width 0.5s;
    }
    .discription.active{
        width: calc(100% - 275px); 
        padding: 0 10px;
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
        margin: 2px 0 2px 5px;
        text-decoration: underline;
        color: gray;
    }
    .extends:hover {
        color: black;
        cursor: pointer;
    }
</style>