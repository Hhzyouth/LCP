<template>
    <div class="Header-Aside-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-container class="aside-main-container">
                <el-aside width="200px" class="aside">
                    <div class="aside-content">
                        <el-anchor
                        :container="containerRef"
                        direction="vertical"
                        type="default"
                        :offset="30"
                        @click="handleClick"
                    >
                        <el-anchor-link href="#part1" title="part1" />
                        <el-anchor-link href="#part2" title="part2" />
                        <el-anchor-link href="#part3" title="part3" />
                    </el-anchor>
                    </div>
                    
                </el-aside>

                <el-main class="main">
                    
                    <div ref="containerRef" style="height: 300px; overflow-y: auto">
                        <div
                        id="part1"
                        style="
                            height: 300px;
                            background: rgba(255, 0, 0, 0.02);
                            margin-top: 30px;
                        "
                        >
                        part1
                        </div>
                        <div
                        id="part2"
                        style="
                            height: 300px;
                            background: rgba(0, 255, 0, 0.02);
                            margin-top: 30px;
                        "
                        >
                        part2
                        </div>
                        <div
                        id="part3"
                        style="
                            height: 300px;
                            background: rgba(0, 0, 255, 0.02);
                            margin-top: 30px;
                        "
                        >
                        part3
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
    .book-container{
        height: 500px;
        width: 100%;
    }

    
    .elcontainer{
        height: 100%;
    }
    .aside-main-container{
        height: calc(100% - 60px);
    }
</style>
<style>
    
</style>