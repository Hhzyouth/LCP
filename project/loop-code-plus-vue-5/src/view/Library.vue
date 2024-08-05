<template>
    <div class="Header-Aside-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-container class="aside-main-container">
                <el-aside width="200px" class="aside">
                    <div class="aside-content">
                        <el-anchor type="underline" :container="containerRef" :offset="30" @click="handleClick" direction="vertical">
                            <el-anchor-link href="#language" title="基础语言"/>
                            <el-anchor-link href="#client" title="客户端"/>
                            <el-anchor-link href="#server" title="服务端"/>
                            <el-anchor-link href="#database" title="数据库"/>
                        </el-anchor>
                    </div>
                </el-aside>

                <el-main class="main">
                    <div ref="containerRef" style="height:100%; overflow-y: auto; ">
                        <div class="book-container" id="language">
                            <p class="book-container-title">
                                基础语言
                            </p>
                            <div class="book">
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
                                <div class="knowledge-card">
                                    <p class="card-title">学习Swift</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/swift.webp" alt="" class="card-img">
                                        <span class="text">
                                            适用于所有 Apple 平台的现代化、安全、快速的编程语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Kotlin</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/kotlin-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            一门现代、安全、可与 Java 及其他语言互操作的编程语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Go</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/go.png" alt="" class="card-img">
                                        <span class="text">
                                            一个开源的编程语言，让构造简单、可靠且高效的软件变得容易
                                        </span>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                        <div class="book-container" id="client">
                            <p class="book-container-title">
                                客户端
                            </p>
                            <div class="book">
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                        <div class="book-container" id="server">
                            <p class="book-container-title">
                                服务端
                            </p>
                            <div class="book">
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                            </div>
                        </div>
                        <div class="book-container" id="database">
                            <p class="book-container-title">
                                数据库
                            </p>
                            <div class="book">
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <div class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </div>
                                <!-- <router-link></router-link> -->
                                <a class="knowledge-card">
                                    <p class="card-title">学习Python</p>
                                    <div class="detail">
                                        <img src="@/assets/knowledgeLogo/python-logo.png" alt="" class="card-img">
                                        <span class="text">
                                            Python 3.x版本 有条理的和强大的面向对象的程序设计语言
                                        </span>
                                    </div>                            
                                </a>
                            </div>
                        </div>  
                    </div>
                      
                    
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  

<script setup>
    import Header from "../components/Header.vue"
    import { ref } from 'vue'
    const Page=ref('2')

    const handleClick = (e) => {
        e.preventDefault()
    }
</script>
<script>
export default {
    data(){
        return {containerRef:null}
    },
    mounted(){
        this.containerRef = this.$refs.containerRef;
    }
 }
</script>

<style scoped>
    .Header-Aside-Main-container{
        margin: 0;
        padding: 0;
        height: 100vh;
    }
    .header{
        padding: 0;
    }
    .book-container{
        background-color: white;
        border-radius: 8px;
        margin: 8px 8px 8px 20px;
        /* height: 500px; */
        width: calc(100% - 90px);
        padding: 8px;
    }
    .book-container-title{
        margin: 0 0 0 8px;
        font-size: 1.2rem;
        font-weight: bold;
    }
    .main{
        padding-top: 0;
        padding-bottom: 0;
        background-color: rgba(239, 239, 239, 0.5);
    }
    .aside-content{
        padding: 8px;
    }
    .elcontainer{
        height: 100%;
    }
    .aside-main-container{
        height: calc(100% - 60px);
    }
    :deep(.el-anchor__link){
        padding: 8px;
        font-size: 1rem;
    }
    :deep(.el-anchor__link.is-active){
        color: #ffd04b;
        background-color: rgba(239, 239, 239, 0.5);
        border-radius: 8px;
        font-weight: bold;
    }
    :deep(.el-anchor__item){
        margin: 10px 0;
    }
    :deep(.el-anchor__marker){
        background-color: #ffd04b;
    }
    :deep(.el-anchor.el-anchor--vertical .el-anchor__marker){
        height:25px;
        width: 6px;
        border-radius: 0 4px 4px 0;
    }
    .book{
        padding: 20px 0 0 20px;
        display: flex;
        flex-wrap: wrap;
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
</style>
<style>

</style>