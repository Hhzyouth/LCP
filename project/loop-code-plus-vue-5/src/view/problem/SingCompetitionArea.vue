<template>
    <div class="Header-Main-container" @keydown.9.native.prevent="()=>{}">
        <el-container>
            <el-header class="elheader">
                <el-icon style="margin-right: 8px;"><Clock /></el-icon>
                <div>
                    {{ getTime() }}
                </div>
                <el-button type="danger" plain round style="position: absolute;left: 32px;" @click="toExit()">退出</el-button>
            </el-header>
            <el-main class="elmain">
                <div :class="leftClass">
                    <el-tabs type="card" class="eltabs" v-model="eltabs">
                        <el-tab-pane label="题目信息" class="pane" name="info">
                            <el-scrollbar>
                                <div v-html="content" style="overflow-y: auto; height: 100%;"></div>
                            </el-scrollbar>
                        </el-tab-pane>
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
                        <code-mirror basic :lang="lang" v-model="codeVal" style="height: 0;flex: 1;" :theme="theme" :tab="true"/>
                        <div class="coding-bottom">
                            <el-button class="runButton" @click="cheer()">运行</el-button>
                            <el-button type="success" @click="runCode" :loading="runLoading">提交</el-button>
                        </div>
                    </div>
                    <div :class="bottomClass">
                        <el-tabs type="card" class="eltabsResult" v-model="activeTab">
                            <el-tab-pane name="测试用例" label="测试用例" class="paneResult">
                                <span>
                                    测试用例
                                </span>
                                <el-input v-model="caseInput" style="width: 95%;margin: 8px 0;" placeholder="测试用例" class="elinput" type="textarea" autosize resize="none"/>
                                <span>
                                    预期结果
                                </span>
                                <el-input v-model="guessInput" style="width: 95%;margin: 8px 0;" placeholder="预期结果" class="elinput" type="textarea" autosize resize="none"/> 
                            </el-tab-pane>
                            <el-tab-pane name="运行结果" label="运行结果" class="paneResult" v-loading="resultLoading">
                                {{ resultText }}
                            </el-tab-pane>
                        </el-tabs>
                        <el-button :class="bottomCloseButton" type="info" :icon="ArrowDownBold" circle style="position: absolute;top: 5px;right: 5px;" @click="bottomController"/>
                    </div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>
    import { reactive, ref, onMounted, h } from "vue";
    import { useRoute, useRouter } from 'vue-router';
    import CodeMirror from 'vue-codemirror6'
    import { python } from '@codemirror/lang-python';
    import { cpp } from '@codemirror/lang-cpp';
    import { java } from '@codemirror/lang-java';
    import { go } from '@codemirror/lang-go';
    import { ArrowLeftBold, ArrowDownBold, FullScreen } from '@element-plus/icons-vue'
    import { run, getProblemContent } from '@/api/workingArea.js'
    import { useUserStore } from "@/store/user.js";
    import confetti from 'canvas-confetti'
    import { useSocketStore } from "@/store/websocket";
    import { add } from "../../api/competition";
    import { useCompetitionStore } from "../../store/competition";
    import { getBaseInfo } from '@/api/header'

    const socketStore=useSocketStore()
    const competitionStore=useCompetitionStore()
    const router=useRouter()
    const activeTab=ref('测试用例')
    const route = useRoute()
    const { scp } = route.params;
    const runLoading=ref(false)
    const resultText=ref('')
    const content=ref('')
    const language=ref('python')
    const languageList={'python':python(),'cpp':cpp(),'java':java(),'go':go()}
    const lang=ref(python())
    const codeVal = ref('');
    const result =ref('')
    const caseInput=ref('')
    const guessInput=ref('')
    const resultLoading=ref(false)
    const eltabs=ref('info')
    const time=ref(0)
    const isFinished=ref(competitionStore.isFinished)

    
    socketStore.$subscribe((mutation,state)=>{
        console.log(state);   
    })
    const togetProblemContent=()=>{
        getProblemContent(
        parseInt(scp)
    ).then((response)=>{
        console.log(response);
        try{
            const pm=Object.keys(JSON.parse(response.data.data.inputSample)).join(',')
            codeVal.value=`def main(${pm}):`
        }catch{
            codeVal.value=`def main():`
        }
        content.value=response.data.data.description
        caseInput.value=response.data.data.inputSample
        guessInput.value=response.data.data.outputSample
    })
    }
    const store=useUserStore()
    const runCode=()=>{
        runLoading.value=true
        resultLoading.value=true
        resultText.value=''
        if (isFinished.value){
            run(
                codeVal.value,
                store.userId,
                parseInt(scp)
            ).then(function (response) {
                // console.log(response)
                runLoading.value=false
                resultLoading.value=false
                result.value=response.data.data
                activeTab.value="运行结果"
                resultText.value=showResultFinished()
            })
        }else{
            console.log("竞赛提交");
            
           add(
            JSON.stringify({
                code:2,
                userId:store.userId,
                roomId:competitionStore.roomId,
                codeVal : codeVal.value,
                token:store.token,
                problemId:parseInt(scp)
                })
            ) 
        }
        
    }
    const showResult=()=>{
        const temp=result.value
        // const temp=eval('('+result.value+')')
        if (temp[3]===100){
            startCheer()
            return '所有用例已通过'
        }else{
            return `分数
${temp[3]}
错误信息
${temp[0].split('$').join('\n')}
控制台输出
${temp[2]}`
        }
        
    }
    const showResultFinished=()=>{
        const temp=eval(result.value)
        // const temp=eval('('+result.value+')')
        if (temp[2]===0){
            cheer()
            return '所有用例已通过'
        }else{
            return transStatus(temp)+`
错误信息
${temp[1].split('$').join('\n')}
控制台输出
${temp[3]}`
        }
        
    }
    const transStatus=(r)=>{
    const t=eval(r)
    switch(t[2]){
        case 0:
            return '正确'
        case 1:
            return '超出时间限制'
        case 2:
            return '运行错误'
        case 3:
            return '编译错误'
        case 4:
            return '答案错误'       
    }
    return ''
}
    
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
const cheer=()=>{
    confetti({
      particleCount: 500,
      angle: 60,
      spread: 90,
      startVelocity: 70,
      ticks:300,
      gravity:1.2,
      origin: {
        x: 0
      },
      colors:['#bd2332']
    });
    confetti({
      particleCount: 500,
      angle: 120,
      spread: 90,
      ticks:300,
      gravity:1.2,
      startVelocity: 70,
      origin: {
        x: 1
      },
      colors:['#bd2332']
    })
}
function startCheer() {
  var end = Date.now() + (5 * 1000);

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 90,
      startVelocity: 70,
      ticks:300,
      gravity:1.2,
      origin: {
        x: 0
      },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 90,
      ticks:300,
      gravity:1.2,
      startVelocity: 70,
      origin: {
        x: 1
      },
    })

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
}
const toExit=()=>{
    ElMessageBox.confirm(
    '您确定要退出吗？（退出后将无法返回）',
    '警告',
    {
      confirmButtonText: '退出',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        router.go(-1)
    })
}
    const getTime=()=>{
        let t=time.value
        let hour=Math.floor(t/3600)
        t=t%3600
        let minute=Math.floor(t/60)
        let second=t%60
        return `${hour} : ${minute} : ${second}`
    }
    togetProblemContent()

    socketStore.$subscribe((mutation,state)=>{
        console.log(mutation,state);
        let m=JSON.parse(state.message)
        switch(m.code){
            case 2:
                if (m.point==100){
                    ElNotification({
                    title: '注意',
                    message: h('i', { style: 'color: teal' }, `对手已提交，取得了${m.point}分,比赛已经结束，但你仍然可以提交，提交将被视为普通的练习`),
                    type: 'warning',
                    duration:0
                    })
                    competitionStore.setis(true)
                }else{
                    ElNotification({
                    title: '注意',
                    message: h('i', { style: 'color: teal' }, `对手已提交，取得了${m.point}分`),
                    type: 'warning',
                    duration:6000
                    })
                }
                cheer()
                break
            case 3:
                console.log(m.result);
                console.log("收到结果")
                runLoading.value=false
                resultLoading.value=false
                result.value=m.result
                activeTab.value="运行结果"
                resultText.value=showResult()
                break
            case 4:
                ElMessage.error("token失效，请重新登录")
        }
        
    })
    if (store.userId===0 && store.token!=='') {
       getBaseInfo()
       .then((response)=>{
            store.setInformation(response.data.data)
       }) 
    }


    onMounted(()=>{
        setInterval(() => {
            time.value++
        }, 1000);
    })
    
</script>

<style scoped>
.elheader{
    position: relative;
    padding: 0;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    min-width: 0;
}
.coding{
    width: 100%;
    flex: 7 1 0;
    border-radius: 16px;
    background-color:white;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
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
    white-space:pre; 
    word-break:break-all;
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
    padding: 6px 16px;
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
:deep(.el-tabs__header){
    margin: 0;
}
.main-header{
    width: 100%;
    display: flex;
    align-items: center;
    height:32px;
    border-bottom: 1px solid rgba(209, 209, 209, 0.64);
}
.status{
    width: 150px;
    flex: 2;
    display: flex;
}
.type{
    width: 40px;
    flex: 1;
}
.point{
    width: 40px;
    flex: 1;
}
.code{
    width: 40px;
    flex: 1;
}
.record{
    display: flex;
    align-items: center;
    height: 45px;
}
.two{
    background-color: rgba(239, 239, 239, 0.3);
}
.green{
    background-color: rgb(116, 182, 102);
}
.red{
    background-color: rgb(201, 92, 84);
}
.orange{
    background-color: rgb(230, 176, 95);
}
.tag-item{
  margin-right: 5px;
  white-space: nowrap;
}
.card-content{
    height: 80px;
    transition: height 1s;
}
.solution-card.active .card-content{
    height: 550px;
}
.solution-card{
    width: 100%;
    border-radius: 16px;
    background-color: white;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid rgb(213, 213, 213);
    border-right: none;
    border-left: none;
    box-sizing: border-box;
    position: relative;
}
.solutions{
    padding: 0 8px;
}
.card-header{
    display: flex;
}
.solution-name{
    margin-right: 16px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
:deep(.solution-html .el-scrollbar__wrap){
    overflow: hidden;
}
:deep(.solution-card.active .solution-html .el-scrollbar__wrap){
    overflow: auto;
}
</style>