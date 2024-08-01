<template>
    <div class="Header-Main-Container">
      <el-container>
        <el-header class="elheader">
            <Header :page="''"/>
        </el-header>
        <el-main class="elmain">
            <div class="container">
                <span class="logo-container">
                    <img src="@/assets/image/main-logo.png" id="main-logo">
                </span>
                <div class="input-container">
                    <el-input
                        v-model="mail"
                        style="width: 300px;height: 40px;"
                        placeholder="邮箱"
                        clearable
                    />
                    <el-input
                        v-model="password"
                        style="width: 300px;height: 40px;"
                        type="password"
                        placeholder="密码"
                        show-password
                    />
                    <el-input
                        v-if="isReg"
                        v-model="again"
                        style="width: 300px;height: 40px;"
                        type="password"
                        placeholder="再次输入密码"
                        show-password
                    />
                </div>
                
                <div class="goButton" @click="checkAndGo">
                    <div class="text">
                        {{ text }}
                    </div>
                </div>
                <div class="goTo">
                    <span v-if="isReg" @click="()=>{isReg=false;text='登录'}" class="to">
                        去{{text}}
                    </span>
                    <span v-else @click="()=>{isReg=true;text='注册'}" class="to">
                        去{{ text }}
                    </span>
                </div>
                
            </div>
        </el-main>
      </el-container>
    </div>
  </template>

<script setup>
    import Header from '../../components/Header.vue';
    import { ref } from 'vue'
    import { useUserStore } from '@/store/user.js'
    import { useRouter } from 'vue-router'
    const store=useUserStore()
    const router=useRouter();
    const input = ref('')
    const isReg =ref(false)
    const text=ref("登录")
    const checkAndGo=()=>{
        if(isReg.value){

        }else{
            store.setToken({token:"123"})
            router.push("/")
        }
    }
</script>

<style scoped>
.elheader{
    padding: 0;
}
.elmain{
    height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("../../assets/image/bg.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    /* background-color: rgba(239, 239, 239, 0.5); */
}
.container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    padding: 25px;
    margin-bottom: 60px;
}
.logo-container{
    padding: 0;
}
.to:hover{
    cursor: pointer;
}
.input-container{
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom:20px; 
}
#main-logo{
    width: auto;
    height: 36px;
}
.goButton{
    width: 300px;
    height: 40px;
    background-color: #FAB900;
    color: white;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.goButton:hover{
    cursor: pointer;
    background-color: #fab700ce;
}
.text{
    font-size: 1.2rem;
}
.to{
    color: grey;
}
.goTo{
    width: 300px;
}
</style>