<template>
    <div class="Header-Main-container">
      <el-container>
        <el-header class="elheader">
            <Header :page="Page"/>
        </el-header>
        <el-main class="main">
            <div class="PersonalCenter-container">
                <div  class="floor">
                    <div class="first-floor">
                        <div class="resume">
                            <div class="portrait">
                                <img src="@/assets/image/course-Python.png" alt="" class="portrait-img">
                            </div>
                            <div class="personal-discription">
                                <div class="personal-name">
                                    张三
                                </div>
                                <div class="personal-id">
                                    id:123456789
                                </div>
                                <div class="personal-designation">
                                    Java
                                </div>
                            </div>
                        </div>
                        <div class="setting">
                            <div class="setting-item">
                                <el-button type="warning" round class="change" size="large">修改个人信息</el-button>
                                <el-button type="primary" class="set"><i><el-icon :size="30"><Setting /></el-icon></i></el-button>
                            </div>
                        </div>
                    </div>
                    <div class="second-floor">
                        <div class="friend-list-container">
                            <div class="friend-list">
                            </div>
                        </div>
                        <div class="remain-item">
                        </div>
                    </div>
                </div>
                
            </div>

        </el-main>
      </el-container>
    </div>
</template>

<script setup>
import Header from "../../components/Header.vue"
import { ref } from 'vue'

const Page=ref()
</script>

<style scoped>
.main{
    background-color: rgba(239, 239, 239, 0.5);
}
.elheader{
    padding:0;
}
.PersonalCenter-container{
    width: 100%;
}
.floor{
    width: 100% -80px;
    display: flex;
    padding: 20px 40px;
}
.first-floor{
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    flex-grow: 1;
}
.resume{
    display: flex;
}
.portrait{
    border-radius: 50%;
    width: 95px;
    height: 95px;
}
.portrait-img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.personal-discription{
    padding: 0 20px;
    display: grid;
    height: 100%;
}
.personal-name{
    font-size: 1.5rem;
}
.personal-id{
    color: gray;
}
.personal-designation{
    color: orange;
}
.setting{
    margin-left: 20px;
}
.setting-item{
    padding: 10px 20px;
}
.change{
    width: 200px;
    height: 50px;
    font-size: 1.2rem;
}
.set{
    height: 50px;
    width: 50px;
}
.second-floor{
    display: flex;
    justify-content:center;
}

</style>