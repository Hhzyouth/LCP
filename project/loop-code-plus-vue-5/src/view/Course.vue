<template>
  <div Header-Main-container>
      <div class="elcontainer">
          <el-container>
              <el-header class="header">
                  <Header :page="Page"/>
              </el-header>
              <el-main class="elmain">
                <div class="container">
                  
                </div>
              </el-main>
          </el-container>
      </div>
  </div>
</template>


<script setup>
  import Header from "../components/Header.vue"
  import { ref } from 'vue'
  const Page=ref('4')
</script>

<style scoped>
.header{
  padding: 0;
}
</style>