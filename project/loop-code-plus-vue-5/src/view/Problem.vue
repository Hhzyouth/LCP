<template>
    <div class="Header-Main-container">
      <el-container>
        <el-header class="elheader">
            <Header :page="Page"/>
        </el-header>
        <el-main>题库</el-main>
      </el-container>
    </div>
  </template>

<script setup>
import Header from "../components/Header.vue"
import { ref } from 'vue'

const Page=ref('5')
</script>

<style scoped>
.elheader{
    padding:0;
}
</style>