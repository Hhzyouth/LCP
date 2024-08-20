<template>
    <div class="Header-Main-container">
        <el-container class="elcontainer">
            <el-header class="header">
                <Header :page="Page"/>
            </el-header>
            <el-main class="elmain">
                <div class="container">
                    <div style="max-width: 600px;flex: 1 1;height: 100%;overflow-y: auto;">
                        <el-form :model="form" label-width="auto" :rules="rules" ref="ruleFormRef">
                            <el-form-item label="题解ID">
                                <el-input v-model="form.solutionId" disabled placeholder="题解ID会自动生成"/>
                            </el-form-item>
                            <el-form-item label="题解名称" required prop="solutionName">
                                <el-input v-model="form.solutionName" placeholder="请输入题目名称"/>
                            </el-form-item>
                            <el-form-item label="标签" required prop="tag">
                            <el-checkbox-group v-model="form.tag">
                                <el-checkbox v-for="item in tagList" :value="item" name="type">
                                    {{ item }}
                                </el-checkbox>
                            </el-checkbox-group>
                            </el-form-item>
                            <el-form-item>
                                <div style="width: 100%;display: flex;justify-content: end;">
                                    <el-button type="success" @click="submitForm(ruleFormRef)">确认并保存</el-button>
                                </div>
                            </el-form-item>
                        </el-form>
                    </div>
                <div style="border: 1px solid #ccc;flex: 1 1;min-width: 200px;margin: 0 0 0 16px;z-index: 1;display: flex;flex-direction: column;">
                    <div class="edit-top">
                        <el-button text @click="initValueHtml()">初始化模板</el-button>
                        <el-button text @click="initValueHtmlSample()">模板样例</el-button>
                        <el-button text @click="clearValueHtml()">清空内容</el-button>
                    </div>
                    <Toolbar
                        style="border-bottom: 1px solid #ccc"
                        :editor="editorRef"
                        :defaultConfig="toolbarConfig"
                        :mode="mode"
                    />
                    <Editor
                        style="flex: 1; overflow-y: hidden;"
                        v-model="form.content"
                        :defaultConfig="editorConfig"
                        :mode="mode"
                        @onCreated="handleCreated"
                    />
                </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>
  
  
<script setup>
    import Header from "../../components/Header.vue"
    import { ref, shallowRef, onBeforeUnmount, reactive, toRaw } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
    import '@wangeditor/editor/dist/css/style.css'
    import { setSolution, getSolution } from "../../api/solution";
    import { useUserStore } from "../../store/user";

    const route = useRoute()
    const router = useRouter()
    const store=useUserStore()
    const { es,esp } = route.params;
    const form = reactive({
        userId:0,
        solutionId:null,
        problemId:esp,
        solutionName: '',
        content: '',
        tag: [],
    })
    const ruleFormRef = ref()
    const editorRef = shallowRef()
    const sendSolution=()=>{
        form.userId=store.userId
        console.log(form);
        
        setSolution(
            form
        ).then((response)=>{
            if (response.data.code===200){
              ElMessage({
                message: '题解已发布',
                type: 'success',
              })
              setTimeout(() => {
                  router.go(0)
              }, 1000);
            }else{
              ElMessage({
                message: '发布失败，请重试',
                type: 'warning',
              })
            }
        }).catch((error)=>{
            console.log(error);
        })
    }
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })
    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }
    const clearValueHtml=()=>{
        form.content=''
    }
    const initValueHtml=()=>{
        form.content=
`<h2>题目名字</h2>   
<p>题目描述<code>行内代码</code></p> 
<br>
<h4>输入样例1</h4>
<pre><code>代码块</code></pre>
<h4>输出样例1</h4>
<pre><code>代码块</code></pre>
<br>
<h4>数据范围</h4>
<p>正文</p>
<h4>提示</h4>
<p>正文</p>
`
    }
    const initValueHtmlSample=()=>{
        form.content=
`<h2>数组求和</h2>   
<p>给定一个只由数字组成的数组 <code>lst</code> ，请返回数组内所有数字之和。</p> 
<br>
<h4>输入样例1</h4>
<pre><code>[1,2,3]</code></pre>
<h4>输出样例1</h4>
<pre><code>6</code></pre>
<h4>输入样例2</h4>
<pre><code>[4,5,6]</code></pre>
<h4>输出样例2</h4>
<pre><code>15</code></pre>
<br>
<h4>数据范围</h4>
<p><code>lst</code>中数据绝对值都小于10<sup>9</sup></p>
<h4>提示</h4>
<p>数组为空时返回0</p>
`
    }
    const toolbarConfig = {}
    const editorConfig = { placeholder: '题目描述......<p></p>建议使用模板快速建成框架并提高规范性' }
    const mode = ref('default')


    const Page=ref('')

    
    const tagList=["哈希表","树","二叉树","堆","栈","图","链表","集合","队列","双向链表","二叉搜索树","强连通分量","最小生成树","并查集","字典树","线段树","树状数组","后缀数组","动态规划","贪心","深度优先搜索","二分查找","广度优先搜索","回溯","递归","分治","记忆化搜索","归并排序","快速选择","数组","字符串","矩阵"]
if(es!=='0'){
getSolution(
    parseInt(es)
  ).then((response)=>{
    if (response.data.code===500){
      router.go(-1)
      ElMessage.error("你无权限编辑此题解")
    }else{
        console.log(response);
        
      form.solutionId=response.data.data.solutionId
      form.solutionName=response.data.data.solutionName
      form.content=response.data.data.content
      form.tag=JSON.parse(response.data.data.tag)
    }
  }).catch((error)=>{
    router.go(-1)
    ElMessage({
        type: 'error',
        message: '网络错误',
      })
  })
}
const rules = reactive({
    solutionName: [
        { required: true, message: '题目名称不能为空', trigger: 'blur' },
    ],
  tag: [
    {
      required: true,
      message: '标签不能为空',
      trigger: 'blur',
    },
  ]
})

const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid && form.content!=='') {
        sendSolution()
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>


<style scoped>
.header{
    padding: 0;
}
.easy{
    color: #3C674B
}
.normal{
    color: #78AA3B;
}
.middle{
    color: #F8C305;
}
.hard{
    color: #E3771D;
}
.hell{
    color: #D82A23;
}
.container{
    overflow: hidden;
    height: 100%;
    display: flex;
}
.elmain{
    overflow: hidden;
    height: calc(100% - 60px);
}
.elcontainer{
    height: 100%;
    overflow: hidden;
}
.Header-Main-container{
    height: 100vh;
}
.edit-top{
    background-color: white;
    display: flex;
    align-items: center;
}
</style>