<template>
    <div Header-Aside-Main-container>
        <div class="elcontainer">
            <el-container>
                <el-header class="header">
                    <Header :page="Page"/>
                </el-header>
                <el-main>Main</el-main>
            </el-container>
        </div>
    </div>
</template>
  

<script setup>
    import Header from "../components/Header.vue"
    import { ref } from 'vue'
    const Page=ref('3')
</script>

<style scoped>
.header{
    padding: 0;
}
</style>