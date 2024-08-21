<template>
    <div class="Header-Main-container">
        <el-container>
            <el-header class="elheader">
                <Header :page="Page"/>
            </el-header>
            <el-main class="main">
                <div class="container">
                    <div class="sheet">
                        <div class="sheet-body">
                            <div class="title">
                                <div class="title-color">

                                </div>
                                <div class="title-text">
                                    修改个人信息
                                </div>
                            </div>
                            <div class="line" style="padding: 10px 0 10px 0;"></div>
                            <div class="sheet-body-title">
                                <div class="portrait">
                                    <img :src="store.avatar" alt="" class="portrait-img">
                                    <div class="icon-size">
                                        <el-upload
                                            class="avatar-uploader"
                                            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                            :show-file-list="false"
                                            :on-success="handleAvatarSuccess"
                                            :before-upload="beforeAvatarUpload"
                                        >
                                            <div class="icon-body"><el-icon class="icon"><EditPen /></el-icon></div>
                                        </el-upload>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-body">
                                <el-form :model="form" label-width="auto" style="max-width: 600px" label-position="left">
                                    <el-form-item label="昵称">
                                    <el-input v-model="form.name" />
                                    </el-form-item>
                                    <el-form-item label="性别">
                                    <el-radio-group v-model="form.resource">
                                        <el-radio value="man">男</el-radio>
                                        <el-radio value="woman">女</el-radio>
                                    </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="个人介绍">
                                    <el-input v-model="form.desc" type="textarea" />
                                    </el-form-item>
                                    <el-form-item>
                                        <div class="button-group">
                                            <el-button type="primary" @click="onSubmit">提交</el-button>
                                            <el-button @click="clear">清空</el-button>
                                        </div>

                                    </el-form-item>
                                </el-form>
                            </div>
                            
                        </div>
                        <div class="sheet-body">
                            <div class="title">
                                <div class="title-color">
                                </div>
                                <div class="title-text">
                                    账号安全
                                </div>
                            </div>
                            <div class="line" style="padding: 10px 0 0 0;"></div>
                            <div class="line-container">
                                
                                <div class="line">
                                    <div v-if="changeEmail===false" class="line-content">
                                        <div class="line-content">
                                            <div class="line-title">邮箱</div>
                                            <div class="line-text">{{ email }}</div>
                                        </div>
                                        <div class="icon"@click="()=>{changeEmail=true}">
                                            <el-icon size="20px"><Edit /></el-icon>
                                            <div class="icon-text">编辑</div>
                                        </div>
                                    </div>
                                    <div v-else class="line-content-else">
                                        <div class="line-content">
                                            <div class="line-title">邮箱</div>
                                        </div>
                                        <div>
                                            <el-form
                                                ref="ruleFormRef"
                                                style="max-width: 600px"
                                                :model="ruleForm"
                                                status-icon
                                                label-width="auto"
                                                class="demo-ruleForm"
                                            >
                                            <el-form-item prop="mail" class="input"
                                            :rules="[
                                                        {
                                                        required: true,
                                                        message: '请输入邮箱',
                                                        trigger: 'blur',
                                                        },
                                                        {
                                                        type: 'email',
                                                        message: '请输入正确的邮箱',
                                                        trigger: ['blur', 'change'],
                                                        },
                                                    ]"
                                            >
                                                <el-input
                                                    v-model="ruleForm.mail"
                                                    style="width: 300px;height: 40px;"
                                                    type="email"
                                                    placeholder="邮箱"
                                                    clearable
                                                />
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
                                            </el-form-item>
                                        </el-form>
                                        </div>
                                    </div>
                                </div>
                                <div class="line">
                                    <div v-if="changePassword===false" class="line-content">
                                        <div class="line-content">
                                            <div class="line-title">密码</div>
                                            <div class="line-text">●●●●●●●</div>
                                        </div>
                                        <div class="icon"@click="()=>{changePassword=true}">
                                            <el-icon size="20px"><Edit /></el-icon>
                                            <div class="icon-text">编辑</div>
                                        </div>
                                    </div>
                                    <div v-else class="line-content-else">
                                        <div class="line-content">
                                            <div class="line-title">密码</div>
                                        </div>
                                        <el-form
                                                :rules="rules"
                                                ref="passwordRef"
                                                style="max-width: 600px"
                                                :model="passwordChange"
                                                status-icon
                                                label-width="auto"
                                                class="demo-ruleForm"
                                            >
                                            <el-form-item label="原密码" prop="oldPass">
                                                <el-input
                                                    
                                                    v-model="passwordChange.oldPass"
                                                    style="width: 300px;height: 40px;"
                                                    type="password"
                                                    placeholder="原密码"
                                                    show-word-limit
                                                    show-password
                                                />
                                            </el-form-item>
                                            <el-form-item label="新密码" prop="pass">
                                                <el-input
                                                    v-model="passwordChange.pass"
                                                    style="width: 300px;height: 40px;"
                                                    type="password"
                                                    placeholder="密码"
                                                    show-password
                                                />
                                            </el-form-item>
                                            <el-form-item label="再次输入密码" prop="checkPass" >
                                                <el-input
                                                    v-model="passwordChange.checkPass"
                                                    style="width: 300px;height: 40px;"
                                                    type="password"
                                                    placeholder="再次输入密码"
                                                    show-password
                                                />
                                            </el-form-item>
                                            <el-form-item>
                                                <el-button type="primary" @click="submitPassword(passwordRef)">提交</el-button>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import { useUserStore } from '@/store/user.js'

import Header from "../../components/Header.vue"
import {ref} from 'vue'
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
const Page=ref('')

const store=useUserStore()

const changeEmail=ref(false)
const email=ref('123@qq.com')
const changePassword=ref(false)
const ruleFormRef=ref('')
const ruleForm = reactive({
    mail: '123@qq.com',
    })


const validatePass1 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入原密码'))
  } else {
    if (passwordChange.oldPass !== '') {
      if (!passwordRef.value) return
      passwordRef.value.validateField('oldPass')
    }
    callback()
  }
}

const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入新密码'))
  } 
  else if(value.length<6 || value.length>20){
    callback(new Error('密码长度必须在6~20之间'))
  }
  else {
    if (passwordChange.checkPass !== '') {
      if (!passwordRef.value) return
      passwordRef.value.validateField('checkPass')
    }
    callback()
  }
}

const validatePass3 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== passwordChange.pass) {
    callback(new Error("新密码应与再次输入密码相同!"))
  } else {
    callback()
  }
}



const passwordRef = ref('')
const passwordChange=reactive({
    oldPass: '',
    pass: '',
    checkPass: '',
})

const rules = reactive({
  oldPass:[{validator: validatePass1, trigger: 'blur'}],
  pass: [{ validator: validatePass2, trigger: 'blur' }],
  checkPass: [{ validator: validatePass3, trigger: 'blur' }],
})






// do not use same name with ref
const form = reactive({
  name: '',
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
const clear = () => {
  form.name = ''
  form.resource = ''
  form.desc = ''
}
const imageUrl = ref('')

const handleAvatarSuccess = (
  response,
  uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile)
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('提交成功!')
      email.value=ruleForm.mail
      changeEmail.value=false
    } else {
      console.log('提交失败!')
    }
  })
}
const submitPassword = (formEl) => {
    if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('提交成功!')
      passwordChange.checkPass=''
      passwordChange.oldPass=''
      passwordChange.pass=''
      changePassword.value=false
    } else {
      console.log('提交失败!')
    }
  })
}
</script>

<style scoped>
.main{
    background-color: rgba(239, 239, 239, 0.5);
}
.elheader{
    padding:0;
}
.container{
    width: 100%;
}
.sheet{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.sheet-body{
    box-shadow: 0 0 10px rgb(201, 201, 201) ;
    border-radius: 16px;
    padding: 20px;
    background-color: white;
    width: 800px;
    margin: 10px;
}
.title{
    display: flex;

}
.title-color{
    width: 18px;
    height: 24px;
    background-color: gold;
    margin-right: 5px;
}
.sheet-body-title{
    padding: 10px 0 0 0;
    display: flex;
    justify-content: center; 
}
.portrait{
    border-radius: 50%;
    width: 100px;
    height: 100px;
    position: relative;
}
.portrait-img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
}
.icon-size{
    position: absolute;
    right: 0;
    bottom: 0;
}
.icon-body{
    border: 3px solid white;
    width: 24px;
    height: 24px;
    background-color: yellow;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-body{
    margin: 40px 20px;
    padding:0 80px;
    width: 700px;
}
.button-group{
    display: flex;
    justify-content:right;
    width: 100%;
}
.line{
    border-bottom: 1px solid rgb(202, 202, 202);
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.line-content{
    width: 100%;
    display: flex;
    align-items: center;
}
.line-text{
    margin-left: 10px;
    align-items: center;
}
.input{
    padding: 10px 0;
    width: 100%;
}
.line-container{
    margin: 0 100px;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
}
.icon:hover{
    color: red;
    cursor: pointer;
}
.icon-text{
    font-size: 0.8rem;
    margin: 0 10px 0 5px;
    width: 26px;
}
.line-content-else{

}
</style>