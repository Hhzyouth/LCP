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
                    <el-form
                        ref="ruleFormRef"
                        style="max-width: 600px"
                        :model="ruleForm"
                        status-icon
                        :rules="rules"
                        label-width="auto"
                        class="demo-ruleForm"
                    >
                        <Transition name="slide-fade">
                            <el-form-item label="昵称" prop="nickname" v-if="isReg">
                                <el-input
                                    v-model.trim="ruleForm.nickname"
                                    style="width: 300px;height: 40px;"
                                    placeholder="昵称"
                                    clearable
                                />
                            </el-form-item>
                        </Transition>
                        <el-form-item label="邮箱" prop="mail">
                            <el-input
                                v-model="ruleForm.mail"
                                style="width: 300px;height: 40px;"
                                type="email"
                                placeholder="邮箱"
                                clearable
                            />
                        </el-form-item>
                        <el-form-item label="密码" prop="pass">
                            <el-input
                                v-model="ruleForm.pass"
                                style="width: 300px;height: 40px;"
                                type="password"
                                placeholder="密码"
                                show-password
                            />
                        </el-form-item>
                        <Transition name="reslide-fade">
                            <el-form-item label="验证" prop="checkPass" v-if="isReg">
                                <el-input
                                    v-model="ruleForm.checkPass"
                                    style="width: 300px;height: 40px;"
                                    type="password"
                                    placeholder="再次输入密码"
                                    show-password
                                />
                            </el-form-item>
                        </Transition>
                    </el-form>
                </div>
                
                <div class="goButton" @click="submitForm(ruleFormRef)">
                    <div class="text">
                        {{ text }}
                    </div>
                </div>
                <div class="goTo">
                    <span v-if="isReg" @click="()=>{isReg=false;text='登录';goText='注册'}" class="to">
                        去{{ goText }}
                    </span>
                    <span v-else @click="()=>{isReg=true;text='注册';goText='登录'}" class="to">
                        去{{ goText }}
                    </span>
                </div>
                
            </div>
        </el-main>
      </el-container>
    </div>
  </template>

<script setup>
    import Header from '../../components/Header.vue';
    import { ref, reactive } from 'vue'
    import { useUserStore } from '@/store/user.js'
    import { useRouter } from 'vue-router'
    import { register } from '@/api/user.js'

    const store=useUserStore()
    const router=useRouter();
    const isReg =ref(false)
    const text=ref("登录")
    const goText=ref("注册")
    const checkAndGo=()=>{
        if(isReg.value){
            register({
                nickName: ruleForm.nickname,
                regMail: ruleForm.mail,
                passwd: ruleForm.pass
            }).then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            store.setToken({token:"123"})
            router.push("/")
        }
    }

    //表单验证--------------------------------------------------------
    const ruleFormRef = ref()

    const checkName = (rule, value, callback) => {
        if (!value) {
            callback(new Error('昵称不能为空'))
        }else if(value.split(" ").join("").length!==value.length){ 
            callback(new Error('昵称中不能有空白符'))
        }else{
            callback()
        }
    }
    const checkMail = (rule, value, callback) => {
        const regEmail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if (!value) {
            callback(new Error('邮箱不能为空'))
        }else if(!regEmail.test(value)){
            callback(new Error('请检查邮箱格式'))
        }else{
            callback()
        }
    }

    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'))
        } else if (value.length<6 || value.length>20){
            callback(new Error('密码长度必须在6~20之间'))
        }else {
            if (ruleForm.checkPass !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('checkPass')
            }
            callback()
        }
    }
    const validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'))
        } else if (value !== ruleForm.pass) {
            callback(new Error("两次输入的密码不一致"))
        } else {
            callback()
        }
    }

    const ruleForm = reactive({
    pass: '',
    checkPass: '',
    mail: '',
    nickname: ''
    })

    const rules = reactive({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    mail: [{ validator: checkMail, trigger: 'blur' }],
    nickname: [{ validator: checkName, trigger: 'blur' }],
    })

    const submitForm = (formEl) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                console.log('submit!')
                checkAndGo()
            } else {
                console.log('error submit!')
            }
        })
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
    flex: 1 0 40%;
    margin:10px 0 20px 0; 
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

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.reslide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.reslide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.reslide-fade-enter-from,
.reslide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>