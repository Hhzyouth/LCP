<template>
    <div class="container">
        <el-tabs tab-position="left" style="height: 100%" class="tabs">
            <el-tab-pane label="安装准备">安装准备</el-tab-pane>
            <el-tab-pane label="Windows">
                <InstallWindows/>
            </el-tab-pane>
            <el-tab-pane label="MacOS">MacOS</el-tab-pane>
            <el-tab-pane label="其他平台">其他平台</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import InstallWindows from './install/Install-Windows.vue';
</script>

<style scoped>
    :deep(.el-tabs--left .el-tabs__active-bar.is-left){
        background-color: #ffd04b;
        border-radius: 8px;
        width: 6px;
    }
    :deep(.el-tabs__item.is-active){
        color:#ffd04b;
    }
    :deep(.el-tabs__item:hover){
        color:#ffd04b;
    }
    .container{
        height: calc(100vh - 60px);
    }
</style>