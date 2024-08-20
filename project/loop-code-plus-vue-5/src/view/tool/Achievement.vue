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
                            <div style="display: flex; justify-content: space-between;">
                                <div class="title">
                                    <div class="title-color">
                                    </div>
                                    <div class="title-text">
                                        个人成就
                                    </div>
                                </div>
                                <div>
                                    <el-button plain @click="dialogTableVisible = true" >设置成就展示</el-button>
                                </div>
                            </div>
                            <div class="line" style="padding: 10px 0 10px 0;"></div>
                            <div>
                                <div>
                                    <div>
                                        <div @click="()=>{
                                            if (icon1===false){
                                                icon1=true;
                                            }else{
                                                icon1=false;
                                            }
                                        }" class="achievement-title">
                                            做题
                                            <div style="display: flex; align-items: center;"v-if="icon1">
                                                <el-icon><ArrowDown /></el-icon>
                                            </div>
                                            <div style="display: flex; align-items: center;"v-else>
                                                <el-icon><ArrowRight /></el-icon>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="achievement-text-container" v-if="icon1">
                                        <div class="achievement-text" v-for="(Session,index) in PresentTrueExeSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次题目
                                                </div>
                                                <div class="achieve-title-color">
                                                    {{PresentTrueExeTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    已达成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    <el-button v-if="checkList.includes(PresentTrueExeTitle1[index])" plain @click="deltitle(PresentTrueExeTitle1[index])">已使用</el-button>
                                                    <el-button plain disabled v-else-if="checkList.length>=6">已达上限</el-button>
                                                    <el-button v-else  type="success" round @click="addtitle(PresentTrueExeTitle1[index])">可使用</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="achievement-text" v-for="(Session,index) in PresentFalseExeSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次题目
                                                </div>
                                                <div class="achieve-title">
                                                    {{PresentFalseExeTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    未完成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    {{exeSession}}/{{Session}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="line" style=" margin: 0 0 10px 0;"></div>
                                <div class="achievement-item" >
                                    <div>
                                        <div class="achievement-title"@click="()=>{
                                            if (icon2===false){
                                                icon2=true;
                                            }else{
                                                icon2=false;
                                            }
                                        }">
                                            竞赛
                                            <div style="display: flex; align-items: center;"v-if="icon2">
                                                <el-icon><ArrowDown /></el-icon>
                                            </div>
                                            <div style="display: flex; align-items: center;"v-else>
                                                <el-icon><ArrowRight /></el-icon>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="achievement-text-container" v-if="icon2">
                                        <div class="achievement-text" v-for="(Session,index) in PresentTrueComSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次竞赛
                                                </div>
                                                <div class="achieve-title-color">
                                                    {{PresentTrueComTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    已达成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    <el-button v-if="checkList.includes(PresentTrueComTitle1[index])" plain @click="deltitle(PresentTrueComTitle1[index])">已使用</el-button>
                                                    <el-button plain disabled v-else-if="checkList.length>=6">已达上限</el-button>
                                                    <el-button v-else type="success" round @click="addtitle(PresentTrueComTitle1[index])">可使用</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="achievement-text" v-for="(score,index) in PresentTrueComScore">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    达到{{score}}分
                                                </div>
                                                <div class="achieve-title-color">
                                                    {{PresentTrueComTitle2[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    已达成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    <el-button v-if="checkList.includes(PresentTrueComTitle2[index])" plain @click="deltitle(PresentTrueComTitle2[index])">已使用</el-button>
                                                    <el-button plain disabled v-else-if="checkList.length>=6">已达上限</el-button>
                                                    <el-button v-else type="success" round @click="addtitle(PresentTrueComTitle2[index])">可使用</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="achievement-text" v-for="(Session,index) in PresentFalseComSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次竞赛
                                                </div>
                                                <div class="achieve-title">
                                                    {{PresentFalseComTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    未完成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    {{comSession}}/{{Session}}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="achievement-text" v-for="(score,index) in PresentFalseComScore">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    达到{{score}}分
                                                </div>
                                                <div class="achieve-title">
                                                    {{PresentFalseComTitle2[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    未完成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    {{comScore}}/{{score}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="line" style="margin: 0 0 10px 0;"></div>
                                <div class="achievement-item" >
                                    <div>
                                        <div class="achievement-title"@click="()=>{
                                            if (icon3===false){
                                                icon3=true;
                                            }else{
                                                icon3=false;
                                            }
                                        }">
                                            单人匹配
                                            <div style="display: flex; align-items: center;"v-if="icon3">
                                                <el-icon><ArrowDown /></el-icon>
                                            </div>
                                            <div style="display: flex; align-items: center;"v-else>
                                                <el-icon><ArrowRight /></el-icon>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="achievement-text-container" v-if="icon3">
                                        <div class="achievement-text" v-for="(Session,index) in PresentTrueSinSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次竞赛
                                                </div>
                                                <div class="achieve-title-color">
                                                    {{PresentTrueSinTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    已达成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    <el-button v-if="checkList.includes(PresentTrueSinTitle1[index])" plain @click="deltitle(PresentTrueSinTitle1[index])">已使用</el-button>
                                                    <el-button plain disabled v-else-if="checkList.length>=6">已达上限</el-button>
                                                    <el-button type="success" round v-else @click="addtitle(PresentTrueSinTitle1[index])">可使用</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="achievement-text" v-for="(score,index) in PresentTrueSinScore">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    达到{{score}}分
                                                </div>
                                                <div class="achieve-title-color">
                                                    {{PresentTrueSinTitle2[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    已达成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    <el-button v-if="checkList.includes(PresentTrueSinTitle2[index])" plain @click="deltitle(PresentTrueSinTitle2[index])">已使用</el-button>
                                                    <el-button plain disabled v-else-if="checkList.length>=6">已达上限</el-button>
                                                    <el-button v-else type="success" round @click="addtitle(PresentTrueSinTitle2[index])">可使用</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="achievement-text" v-for="(Session,index) in PresentFalseSinSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次竞赛
                                                </div>
                                                <div class="achieve-title">
                                                    {{PresentFalseSinTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    未完成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    {{sinSession}}/{{Session}}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="achievement-text" v-for="(score,index) in PresentFalseSinScore">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    达到{{score}}分
                                                </div>
                                                <div class="achieve-title">
                                                    {{PresentFalseSinTitle2[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    未完成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    {{sinScore}}/{{score}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="line" style=" margin: 0 0 10px 0;"></div>
                                <div class="achievement-item" >
                                    <div>
                                        <div  class="achievement-title"@click="()=>{
                                            if (icon4===false){
                                                icon4=true;
                                            }else{
                                                icon4=false;
                                            }
                                        }">
                                            多人匹配
                                            <div style="display: flex; align-items: center;"v-if="icon4">
                                                <el-icon><ArrowDown /></el-icon>
                                            </div>
                                            <div style="display: flex; align-items: center;"v-else>
                                                <el-icon><ArrowRight /></el-icon>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div class="achievement-text-container" v-if="icon4">
                                        <div class="achievement-text" v-for="(Session,index) in PresentTrueMulSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次竞赛
                                                </div>
                                                <div class="achieve-title-color">
                                                    {{PresentTrueMulTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    已达成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    <el-button v-if="checkList.includes(PresentTrueMulTitle1[index])"plain @click="deltitle(PresentTrueMulTitle1[index])">已使用</el-button>
                                                    <el-button plain disabled v-else-if="checkList.length>=6">已达上限</el-button>
                                                    <el-button type="success" round v-else @click="addtitle(PresentTrueMulTitle1[index])" >可使用</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="achievement-text" v-for="(score,index) in PresentTrueMulScore">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    达到{{score}}分
                                                </div>
                                                <div class="achieve-title-color">
                                                    {{PresentTrueMulTitle2[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    已达成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    <el-button v-if="checkList.includes(PresentTrueMulTitle2[index])" plain @click="deltitle(PresentTrueMulTitle2[index])">已使用</el-button>
                                                    <el-button plain disabled v-else-if="checkList.length>=6">已达上限</el-button>
                                                    <el-button type="success" round v-else @click="addtitle(PresentTrueMulTitle2[index])" >可使用</el-button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="achievement-text" v-for="(Session,index) in PresentFalseMulSession">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    完成{{Session}}次竞赛
                                                </div>
                                                <div class="achieve-title">
                                                    {{PresentFalseMulTitle1[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    未完成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    {{mulSession}}/{{Session}}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="achievement-text" v-for="(score,index) in PresentFalseMulScore">
                                            <div class="achievement-text-item">
                                                <div class="achievement-text-item-title">
                                                    达到{{score}}分
                                                </div>
                                                <div class="achieve-title">
                                                    {{PresentFalseMulTitle2[index]}}
                                                </div>
                                                <div class="achievement-text-item-text">
                                                    未完成
                                                </div>
                                            </div>
                                            <div class="judge">
                                                <div>
                                                    {{mulScore}}/{{score}}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <el-dialog v-model="dialogTableVisible" title="展示选择" width="800">
                    <el-checkbox-group v-model="checkList" :max="6">
                        <el-checkbox v-for="item in PresentTrueExeTitle1" :label="item" :value="item" border/>
                        <el-checkbox v-for="item in PresentTrueComTitle1" :label="item" :value="item" border/>
                        <el-checkbox v-for="item in PresentTrueComTitle2" :label="item" :value="item" border/>
                        <el-checkbox v-for="item in PresentTrueSinTitle1" :label="item" :value="item" border/>
                        <el-checkbox v-for="item in PresentTrueSinTitle2" :label="item" :value="item" border/>
                        <el-checkbox v-for="item in PresentTrueMulTitle1" :label="item" :value="item" border/>
                        <el-checkbox v-for="item in PresentTrueMulTitle2" :label="item" :value="item" border/>
                    </el-checkbox-group>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="checkList=[]">清空</el-button>
                            <el-button type="primary" @click="dialogTableVisible = false">
                                确认
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
            </el-main>
        </el-container>
    </div>
</template>
<script setup>
import Header from "../../components/Header.vue"
import {reactive, ref} from 'vue'

const dialogTableVisible = ref(false)

const Page=ref('')
const icon1=ref(false)
const icon2=ref(false)
const icon3=ref(false)
const icon4=ref(false)
//场次
const exeSession=ref(875)
const sinSession=ref(130)
const mulSession=ref(463)
const comSession=ref(645)
//分数
const sinScore=ref(6420)
const mulScore=ref(16420)
const comScore=ref(3420)
//标准
const standardSession=reactive([
 1,10,100,1000
])
const standardScore=reactive([2000,4000,6000,8000,10000,12000,14000,16000,18000,20000,
])

const titletext1=reactive(["小试牛刀","初窥门径","略有小成","驾轻就熟","融会贯通"])
const titletext2=reactive(["布衣","新兵","卫士","中军","大将","统帅","传奇","‌万古流芳","‌超凡入圣","‌冠绝一世"])




const PresentTrueExeSession=reactive([])
const PresentFalseExeSession=reactive([])
const PresentTrueExeTitle1=reactive([])
const PresentFalseExeTitle1=reactive([])


const exeJudge=()=>{
    for(let i=0;i<standardSession.length;i++){
        if(standardSession[i]<=exeSession.value){
            PresentTrueExeSession.push(standardSession[i])
            PresentTrueExeTitle1.push(titletext1[i])
        }else{
            PresentFalseExeSession.push(standardSession[i])
            PresentFalseExeTitle1.push(titletext1[i])
        }
    }
}
exeJudge()
const PresentTrueComSession=reactive([])
const PresentFalseComSession=reactive([])
const PresentTrueComTitle1=reactive([])
const PresentFalseComTitle1=reactive([])

const comJudge=()=>{
    for(let i=0;i<standardSession.length;i++){
        if(standardSession[i]<=comSession.value){
            PresentTrueComSession.push(standardSession[i])
            PresentTrueComTitle1.push("竞赛:"+titletext1[i])
        }else{
            PresentFalseComSession.push(standardSession[i])
            PresentFalseComTitle1.push("竞赛:"+titletext1[i])
        }
    }
}
comJudge()
const PresentTrueComScore=reactive([])
const PresentFalseComScore=reactive([])
const PresentTrueComTitle2=reactive([])
const PresentFalseComTitle2=reactive([])

const comScoreJudge=()=>{
    for(let i=0;i<standardScore.length;i++){
        if(standardScore[i]<=comScore.value){
            PresentTrueComScore.push(standardScore[i])
            PresentTrueComTitle2.push("竞赛:"+titletext2[i])
        }else{
            PresentFalseComScore.push(standardScore[i])
            PresentFalseComTitle2.push("竞赛:"+titletext2[i])
        }
    }
}
comScoreJudge()
const PresentTrueSinSession=reactive([])
const PresentFalseSinSession=reactive([])
const PresentTrueSinTitle1=reactive([])
const PresentFalseSinTitle1=reactive([])

const sinSessionJudge=()=>{
    for(let i=0;i<standardSession.length;i++){
        if(standardSession[i]<=sinSession.value){
            PresentTrueSinSession.push(standardSession[i])
            PresentTrueSinTitle1.push("单人:"+titletext1[i])
        }else{
            PresentFalseSinSession.push(standardSession[i])
            PresentFalseSinTitle1.push("单人:"+titletext1[i])
        }
    }
}
sinSessionJudge()
const PresentTrueSinScore=reactive([])
const PresentFalseSinScore=reactive([])
const PresentTrueSinTitle2=reactive([])
const PresentFalseSinTitle2=reactive([])

const sinScoreJudge=()=>{
    for(let i=0;i<standardScore.length;i++){
        if(standardScore[i]<=sinScore.value){
            PresentTrueSinScore.push(standardScore[i])
            PresentTrueSinTitle2.push("单人:"+titletext2[i])
        }else{
            PresentFalseSinScore.push(standardScore[i])
            PresentFalseSinTitle2.push("单人:"+titletext2[i])
        }
    }
}
sinScoreJudge()
const PresentTrueMulSession=reactive([])
const PresentFalseMulSession=reactive([])
const PresentTrueMulTitle1=reactive([])
const PresentFalseMulTitle1=reactive([])

const mulSessionJudge=()=>{
    for(let i=0;i<standardSession.length;i++){
        if(standardSession[i]<=mulSession.value){
            PresentTrueMulSession.push(standardSession[i])
            PresentTrueMulTitle1.push('多人:'+titletext1[i])
        }else{
            PresentFalseMulSession.push(standardSession[i])
            PresentFalseMulTitle1.push('多人:'+titletext1[i])
        }
    }
}
mulSessionJudge()
const PresentTrueMulScore=reactive([])
const PresentFalseMulScore=reactive([])
const PresentTrueMulTitle2=reactive([])
const PresentFalseMulTitle2=reactive([])

const mulScoreJudge=()=>{
    for(let i=0;i<standardScore.length;i++){
        if(standardScore[i]<=mulScore.value){
            PresentTrueMulScore.push(standardScore[i])
            PresentTrueMulTitle2.push('多人:'+titletext2[i])
        }else{
            PresentFalseMulScore.push(standardScore[i])
            PresentFalseMulTitle2.push('多人:'+titletext2[i])
        }
    }
}
mulScoreJudge()

const checkList = ref([])

const addtitle = (title)=>{
    checkList.value.push(title)
}
const deltitle = (title)=>{
    checkList.value.splice(checkList.value.indexOf(title),1)
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
.line{
    border-bottom: 1px solid rgb(202, 202, 202);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.achievement-title{
    margin: 20px 0 20px 20px;
    display: flex;
    align-items: center;
}
.achievement-title:hover{
    cursor: pointer;
}
.achievement-text-item{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
}
.judge{
    display: flex;
    justify-content: right;
}
.achievement-text{
    border: 1px solid rgb(202, 202, 202);
    padding: 10px;
}
.achievement-container{
    margin: 10px 20px;

}
.num{
    padding: 0 10px;
}
.achievement-text-item-title{
    width: 150px;
}
.achieve-title{
    color: gray;
}
.achieve-title-color{
    color: rgb(250,185,0);
}
</style>