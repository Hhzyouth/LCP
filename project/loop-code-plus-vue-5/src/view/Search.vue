<template>
        <div Header-Aside-Main-container>
        <div class="elcontainer">
            <el-container>
                <el-header class="header">
                    <Header :page="Page"/>
                </el-header>
                <el-main>
                    <div class="top-input">
                        <el-input class="input" v-model="input" style="width: 240px" placeholder="搜索" :prefix-icon="Search"/>
                    </div>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { Search } from '@element-plus/icons-vue'
    const route = useRoute()
    const { q } = route.params;
    const input =ref('')
    input.value=q
    const Page=ref()
</script>

<style scoped>

</style>