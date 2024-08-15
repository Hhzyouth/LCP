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
                            <el-form-item label="题目ID">
                                <el-input v-model="form.problemId" disabled placeholder="题目ID会自动生成"/>
                            </el-form-item>
                            <el-form-item label="题目名称" required>
                                <el-input v-model="form.problemName" placeholder="请输入题目名称"/>
                            </el-form-item>
                            <el-form-item label="难度等级" required style="display: flex;">
                                <el-slider v-model="form.difficultyLevel" :step="1" :max="10" :min="1" style="width: calc(100% - 60px);"/>
                                <div :class="classLevel(form.difficultyLevel)" style="padding-left: 16px;font-size: 1.1rem;">
                                    {{ showLevel(form.difficultyLevel) }}
                                </div>
                            </el-form-item>
                            <el-form-item label="是否公开题目" required>
                            <el-switch v-model="deliver" />
                            </el-form-item>
                            <el-form-item label="标签" required>
                            <el-checkbox-group v-model="form.tag">
                                <el-checkbox v-for="item in tagList" :value="item" name="type">
                                    {{ item }}
                                </el-checkbox>
                            </el-checkbox-group>
                            </el-form-item>
                            <el-form-item label="输入用例" required>
                                <el-input v-model="form.inputSample" placeholder="此用例仅用于测试 例:{lst:[1,2,3]}"/>
                            </el-form-item>
                            <el-form-item label="输出用例" required>
                                <el-input v-model="form.outputSample" placeholder="此用例仅用于测试 例:6"/>
                            </el-form-item>
                            <el-form-item>
                                <div style="width: 100%;display: flex;justify-content: end;">
                                    <el-button type="primary" @click="()=>{drawer=true}" plain>判题用例集</el-button>
                                </div>
                            </el-form-item>
                            <el-form-item>
                                <div style="width: 100%;display: flex;justify-content: end;">
                                    <el-button type="success" @click="submitForm(ruleFormRef)">确认并保存</el-button>
                                    <el-button @click="()=>{this.$router.go(-1)}">取消</el-button>
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
                        v-model="form.description"
                        :defaultConfig="editorConfig"
                        :mode="mode"
                        @onCreated="handleCreated"
                    />
                </div>
                </div>
            </el-main>
        </el-container>
    </div>
    <el-drawer
        v-model="drawer"
        title="这些用例将用于判题系统判分"
        size="40%"
    >   
        <div style="display: flex;flex-direction: column;">
            <div style="display: flex;">
                <el-button text @click="initCases()">初始化模板</el-button>
                <el-button text @click="initCasesSample()">模板样例</el-button>
            </div>
            <el-input
                v-model="form.testCase"
                style="width: 100%"
                autosize
                type="textarea"
                placeholder="用例(请使用模板中的命名方式)"
            />
        </div>
        
    </el-drawer>
</template>
  
  
<script setup>
    import Header from "../../components/Header.vue"
    import { ref, shallowRef, onBeforeUnmount, reactive, toRaw } from 'vue'
    import { useRoute, useRouter } from 'vue-router';
    import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
    import '@wangeditor/editor/dist/css/style.css'
    import { setProblem } from '@/api/problem.js'
    import { useUserStore } from "../../store/user";

    const deliver=ref(false)
    const route = useRoute()
    const router = useRouter()
    const store=useUserStore()
    const form = reactive({
        userId:0,
        problemId:null,
        problemName: '',
        description: '',
        inputSample:'',
        outputSample:'',
        difficultyLevel: 1,
        tag: [],
        collection:[],
        testCase:''
    })
    const ruleFormRef = ref()
    const drawer = ref(false)
    const editorRef = shallowRef()
    const sendProblem=()=>{
        form.userId=store.userId
        form.status=deliver.value ? 1:0
        console.log(form);
        
        setProblem(
            toRaw(form)
        ).then((response)=>{
            console.log(response);
            if (response.data.code===200){
              ElMessage({
                message: '题目已保存',
                type: 'success',
              })
              setTimeout(() => {
                  router.go(0)
              }, 3000);
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
        form.description=''
    }
    const initValueHtml=()=>{
        form.description=
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
        form.description=
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
    const initCases=()=>{
        form.testCase=
`{
  "1" : {
    "in" : ,   
    "out" : 
  },
  "2" : {
    "in" : ,
    "out" : 
  }
}
`
    }
    const initCasesSample=()=>{
        form.testCase=
`{序号,in,out都使用双引号包裹
  "1" : {
    "in" : [[123]],   一个输入变量[123]
    "out" : true   一个输出true
  },
  "2" : {
    "in" : [4,["hello"],97],   三个输入变量4,["hello"],97
    "out" : ["4","hello",97]   一个输出["4","hello",97]
  }
}
`
    }
    const toolbarConfig = {}
    const editorConfig = { placeholder: '题目描述......<p></p>建议使用模板快速建成框架并提高规范性' }
    const mode = ref('default')


    const Page=ref('')

    const { ep } = route.params;
    const tagList=["哈希表","树","二叉树","堆","栈","图","链表","集合","队列","双向链表","二叉搜索树","强连通分量","最小生成树","并查集","字典树","线段树","树状数组","后缀数组","动态规划","贪心","深度优先搜索","二分查找","广度优先搜索","回溯","递归","分治","记忆化搜索","归并排序","快速选择","数组","字符串","矩阵"]
    const showLevel=(level)=>{
  switch(level){
    case 1:
    case 2:
      return '简单'
    case 3:
    case 4:
      return '普通'
    case 5:
    case 6:
      return '中等'
    case 7:
    case 8:
      return '困难'
    case 9:
    case 10:
      return '炼狱'
    default:
      return '未定级'
  }
}
const classLevel=(level)=>{
  switch(level){
    case 1:
    case 2:
      return 'level easy'
    case 3:
    case 4:
      return 'level normal'
    case 5:
    case 6:
      return 'level middle'
    case 7:
    case 8:
      return 'level hard'
    case 9:
    case 10:
      return 'level hell'
    default:
      return 'level notKnow'
  }
}

const rules = reactive({
    problemName: [
        { required: true, message: '题目名称不能为空', trigger: 'blur' },
    ],
    inputSample: [
    {
      required: true,
      message: '输入用例不能为空',
      trigger: 'blur',
    },
  ],
  outputSample: [
    {
      required: true,
      message: '输出用例不能为空',
      trigger: 'blur',
    },
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
    if (valid && form.description!=='' && form.testCase!=='') {
        sendProblem()
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