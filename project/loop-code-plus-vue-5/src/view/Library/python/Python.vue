<template>
    <div class="Header-Aside-Main-container">
      <el-container>
        <el-header>logo 返回知识库 搜索图标 头像 消息</el-header>
        <el-container>
          <el-aside width="250px">
            <el-scrollbar class="scrollbar">
                <el-menu
                    default-active="/Python/Python-introduction"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    router
                >
                    <el-menu-item index="/Python/Python-introduction">
                        Python 介绍
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-install">
                        Python 环境搭建
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-calculator">
                        Python 导学示例：计算器
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-basicSyntax">
                        Python 基础语法
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-interpreter">
                        Python 解释器
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-comment">
                        Python 注释
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-introduction">
                        Python 控制流工具
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-install">
                        Python 数据结构
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-calculator">
                        Python 模块
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-basicSyntax">
                        Python 输入与输出
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-interpreter">
                        Python 错误与异常
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-comment">
                        Python 类
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-introduction">
                        Python 标准库
                    </el-menu-item>
                    <el-menu-item index="/Python/Python-install">
                        Python 接下来？
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
          </el-aside>
          <el-main class="elmain">
            <router-view />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>

<script setup>
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
    .el-menu-item.is-active{
        color: #ffd04b;
        background-color: #07172777;
        border-radius: 8px;
        font-weight: bold;
    }
    .el-menu-item{
        font-size: 1rem;
        margin: 5px 10px;
        height: 35px;
        border-radius: 8px;
    }
    .el-menu-item:hover{
        background-color: rgba(239, 239, 239, 0.5);
    }
    .el-menu-item.is-active:hover{
        background-color: #07172777
    }
    .scrollbar{
        height: calc(100vh - 60px);
    }
    .elmain{
        padding: 0;
        background-color: rgba(239, 239, 239, 0.5);
    }
</style>
