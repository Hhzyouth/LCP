<template>
    <div class="Header-Main-container" @keydown.9.native.prevent="()=>{}">
        <el-container>
            <el-header class="elheader">
                <Header :page="Page"/>
            </el-header>
            <el-main class="elmain">
                <div :class="leftClass">
                    <el-tabs type="card" class="eltabs">
                        <el-tab-pane label="题目信息" class="pane">
                            <div v-html="content" style="overflow-y: auto; height: 100%;"></div>
                        </el-tab-pane>
                        <el-tab-pane label="题解" class="pane">Config</el-tab-pane>
                        <el-tab-pane label="提交记录" class="pane">Role</el-tab-pane>
                    </el-tabs>
                    <el-button :class="leftCloseButton" type="info" :icon="ArrowLeftBold" circle style="position: absolute;top: 5px;right: 5px;" @click="leftController"/>
                </div>
                <div class="working">
                    <div class="coding">
                        <div class="coding-top">
                            <span>代码</span>
                            <div>
                                <el-select
                                    v-model="language"
                                    style="width: 100px;margin-right: 8px;"
                                    :change="changeLang()"
                                >
                                    <el-option
                                    v-for="item in langList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    />
                                </el-select>
                                <el-button class="fullButton" :icon="FullScreen" circle @click="allController"/>
                            </div>
                        </div>
                        <code-mirror basic :lang="lang" v-model="codeVal" style="height: calc(100% - 80px);" :theme="theme" :tab="true"/>
                        <div class="coding-bottom">
                            <el-button class="runButton" @click="()=>{console.log(codeVal)}">运行</el-button>
                            <el-button type="success" @click="runCode">提交</el-button>
                        </div>
                    </div>
                    <div :class="bottomClass">
                        <el-tabs type="card" class="eltabsResult">
                            <el-tab-pane label="测试用例" class="paneResult">
                                <span>
                                    测试用例
                                </span>
                                <el-input v-model="caseInput" style="width: 95%;margin: 8px 0;" placeholder="测试用例" class="elinput" type="textarea" autosize resize="none"/>
                                <span>
                                    预期结果
                                </span>
                                <el-input v-model="guessInput" style="width: 95%;margin: 8px 0;" placeholder="预期结果" class="elinput" type="textarea" autosize resize="none"/> 
                            </el-tab-pane>
                            <el-tab-pane label="运行结果" class="paneResult">Config</el-tab-pane>
                        </el-tabs>
                        <el-button :class="bottomCloseButton" type="info" :icon="ArrowDownBold" circle style="position: absolute;top: 5px;right: 5px;" @click="bottomController"/>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
    import { ref } from "vue";
    import Header from "../../components/Header.vue"
    import { useRoute } from 'vue-router';
    import CodeMirror from 'vue-codemirror6'
    import { python } from '@codemirror/lang-python';
    import { cpp } from '@codemirror/lang-cpp';
    import { java } from '@codemirror/lang-java';
    import { go } from '@codemirror/lang-go';
    import { ArrowLeftBold, ArrowDownBold, FullScreen } from '@element-plus/icons-vue'
    import { run, getProblemContent } from '@/api/workingArea.js'
    import { useUserStore } from "@/store/user.js";

    const route = useRoute()
    const { p } = route.params;
    getProblemContent(
        parseInt(p)
    ).then((response)=>{
        console.log(response);
        
        content.value=response.data.data.description
    })
    const store=useUserStore()
    
    const runCode=()=>{
        run(
            codeVal.value,
            store.userId,
            parseInt(p)
        ).then(function (response) {
            console.log(response)
        })
    }
    const Page=ref('5')
    
    const content=ref('')
    const language=ref('python')
    const languageList={'python':python(),'cpp':cpp(),'java':java(),'go':go()}
    const lang=ref(python())
    const codeVal = ref(`def main(a,b):
`);
    const theme = {
        
        ".cm-content": {
            fontSize: '14px',
            fontFamily: 'Consolas, "Courier New", monospace',
        },
    }
    const leftClass=ref('content')
    const bottomClass=ref('result')
    const leftCloseButton=ref('closeButton')
    const bottomCloseButton=ref('closeButton')
    const changeLang=()=>{
        lang.value=languageList[language.value]
    }
    const leftController=()=>{
        if (leftClass.value=='content'){
            leftClass.value='content-close'
            leftCloseButton.value='closeButton-close'
        }else{
            leftClass.value='content'
            leftCloseButton.value='closeButton'
        }
    }
    const bottomController=()=>{
        if (bottomClass.value=='result'){
            bottomClass.value='result-close'
            bottomCloseButton.value='closeButton-close'
        }else{
            bottomClass.value='result'
            bottomCloseButton.value='closeButton'
        }
    }
    const allController=()=>{
        if(leftClass.value=='content-close' && bottomClass.value=='result-close'){
            leftClass.value='content'
            bottomClass.value='result'
            leftCloseButton.value='closeButton'
            bottomCloseButton.value='closeButton'
        }else{
            bottomClass.value='result-close'
            leftClass.value='content-close'
            bottomCloseButton.value='closeButton-close'
            leftCloseButton.value='closeButton-close'
        }
    }
    const caseInput=ref('')
    const guessInput=ref('')
    
    const langList=[
    {
        value: 'python',
        label: 'Python',
    },
    {
        value: 'java',
        label: 'Java',
    },
    {
        value: 'cpp',
        label: 'C++',
    },
    {
        value: 'go',
        label: 'Go',
    },
    ]

</script>

<style scoped>
.elheader{
    padding: 0;
}
.elmain{
    overflow: hidden;
    display: flex;
    padding: 8px;
    height: calc(100vh - 60px);
    background-color: rgba(239, 239, 239, 0.8);
}
.content{
    position: relative;
    height: calc(100% - 16px);
    flex: 4 1 0;
    border-radius: 16px;
    background-color:white;
    margin: 8px;
}
.content-close{
    width: 0;
    position: relative;
    height: calc(100% - 16px);
    border-radius: 16px;
    background-color:white;
    margin: 8px;
}
:deep(.content-close .el-tabs__header){
    display: none;
}
.working{
    display: flex;
    flex-direction: column;
    flex: 6 1 0;
    margin: 8px;
}
.coding{
    width: 100%;
    flex: 7 1 0;
    border-radius: 16px;
    background-color:white;
    margin-bottom: 8px;
}
.result{
    position: relative;
    width: 100%;
    flex: 3 1 0;
    border-radius: 16px;
    background-color:white;
}
.result-close{
    position: relative;
    width: 100%;
    height: 0;
    flex: none;
    border-radius: 16px;
    background-color:white;
}
.c{
    width: 100%;
    display: flex;
    text-wrap: wrap;
}
.result-close .eltabsResult{
    display: none;
}
.eltabs{
    height: 100%;
    border-radius: 16px;
}
.eltabsResult{
    height: 100%;
    border-radius: 16px;
}
:deep(.el-tabs--card>.el-tabs__header .el-tabs__nav){
    border-radius: 16px 8px 0 0;
}
:deep(.el-tabs__item){
    background-color: rgba(239, 239, 239, 0.5);
}
:deep(.el-tabs__item.is-active){
    background-color: rgba(255, 255, 255, 0)
}
.pane{
    height: 100%;
}
.paneResult{
    max-height: 147.94px;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}
:deep(.el-tabs__content){
    height: calc(100% - 55.56px);
    padding: 0 8px;
}
:deep(.cm-editor) {
    height: 100%;
}
:deep(.ͼ1.cm-focused){
    outline: none;
}
.coding-top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 0.9rem;
}
.result-top{
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    font-size: 0.9rem;
    background-color: #efefef70;
    border-radius: 16px 16px 0 0;
}
.coding-bottom{
    padding: 0 16px;
    display: flex;
    justify-content: end;
}
.runButton:hover{
    background-color: #f4f4f5;
    color: #909399;
    border: 1px solid #f4f4f5;
}
.fullButton,
.closeButton{
    background: #ffffff00;
    border-color: #ffffff00;
    color: grey;
}
.fullButton:hover,
.closeButton:hover{
    background: #909399;
    border-color: #909399;
    color: white;
}
:deep(.el-textarea){
    --el-input-bg-color:#eee;
}
:deep(.el-textarea__inner){
    box-shadow:none
}
</style>