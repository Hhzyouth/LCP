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
                                <div class="personal-title">
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
                        <div class="personal-information">
                            <div class="personal-information-item">
                               <div class="friend">
                                    <div class="friend-item-icon">
                                        <el-icon size="32"><User /></el-icon>
                                    </div>
                                    <div class="friend-item-text">好友</div>
                                    <div class="friend-num">
                                        {{friendNum}}
                                    </div>
                                </div>
                                <div class="main-string">
                                    <div class="I"></div>
                                </div>
                                <div class="backpage">
                                    <div class="backpage-item-icon">
                                        <img src="@/assets/icon/MaterialSymbolsBackpackOutlineRounded.svg" alt="" class="tool-img">
                                    </div>
                                    <div class="backpage-item-text">背包</div>
                                    <div class="backpage-num">
                                        {{packpageNum}}
                                    </div>
                                </div>
                            </div> 
                            <div class="button-friend">
                                <el-button type="danger" class="button-size">添加好友</el-button>
                            </div>
                            <div class="personal-information-text">
                                <div class="personal-information-text-title">
                                    个人简介
                                </div>
                                <div class="personal-information-text-content">
                                    {{ userIntroduction }}
                                </div>
                            </div>
                            <div class="line-string">
                                    <div class="I"></div>
                            </div>
                            <div class="personal-information-text">
                                <div class="personal-information-text-title">
                                    展示框
                                </div>
                                <div>
                                    勋章展示
                                </div>
                            </div>
                            <div class="line-string">
                                    <div class="I"></div>
                            </div>
                            <div class="personal-information-text">
                                <div class="personal-information-text-title">
                                    技能
                                </div>
                                <div class="skill" @mouseover="flag0=true" @mouseleave="time0" >
                                    {{ progressNum[0].name }}
                                    <div class="progress-size"> 
                                        <el-progress :percentage="progressNum[0].num1/progressNum[0].num2*100" :color="customColorMethod" 
                                        :format="(percentage) => ( flag0 ? `${progressNum[0].num1}/${progressNum[0].num2}` : `${percentage}%`)" :text-inside="flag0"  >
                                        </el-progress>
                                    </div>
                                </div>
                                <div class="skill" @mouseover="flag1=true" @mouseleave="time1">
                                    {{ progressNum[1].name }}
                                    <div class="progress-size"> 
                                        <el-progress :percentage="progressNum[1].num1/progressNum[1].num2*100" :color="customColorMethod"
                                        :format="(percentage) => ( flag1 ? `${progressNum[1].num1}/${progressNum[1].num2}` : `${percentage}%`)" :text-inside="flag1"  >
                                        </el-progress>
                                    </div>
                                </div>
                                <div class="skill" @mouseover="flag2=true" @mouseleave="time2" >
                                    {{ progressNum[2].name }}
                                    <div class="progress-size"> 
                                        <el-progress :percentage="progressNum[2].num1/progressNum[2].num2*100" :color="customColorMethod"
                                        :format="(percentage) => ( flag2 ? `${progressNum[2].num1}/${progressNum[2].num2}` : `${percentage}%`)" :text-inside="flag2"  >
                                        </el-progress>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                        <div class="personal-presentation">
                            <div class="progress">
                                <el-progress type="circle" :percentage="percentageSimple" :color= "'#3C674B'" @mouseover="flag001=true" @mouseleave="flag001=false" >
                                    <template #default="{ percentageSimple }">
                                        <div v-if="flag001">
                                            <span class="percentage-value">{{ percentageSimplePass }}/{{ percentageSimpleAll }}</span>
                                            <span class="percentage-label">已完成</span>
                                        </div>
                                        <div v-else>
                                            <div class="percentage-value">{{ percentageSimples }}%</div>
                                            <div class="percentage-label-value">简单</div>
                                        </div>
                                    </template>
                                </el-progress>
                                <el-progress type="circle" :percentage="percentageCommon" :color= "'#78AA3B'" @mouseover="flag002=true" @mouseleave="flag002=false">
                                    <template #default="{ percentageCommon }">
                                        <div v-if="flag002">
                                            <span class="percentage-value">{{ percentageCommonPass }}/{{ percentageCommonAll }}</span>
                                            <span class="percentage-label">已完成</span>
                                            
                                        </div>
                                        <div v-else>
                                            <div class="percentage-value">{{ percentageCommons }}%</div>
                                            <div class="percentage-label-value">普通</div>
                                        </div>
                                    </template>
                                </el-progress>
                                <el-progress type="circle" :percentage="percentageMedium" :color= "'#F8C305'" @mouseover="flag003=true" @mouseleave="flag003=false">
                                    <template #default="{ percentageMedium }">
                                        <div v-if="flag003">
                                            <span class="percentage-value">{{ percentageMediumPass }}/{{ percentageMediumAll }}</span>
                                            <span class="percentage-label">已完成</span>
                                            
                                        </div>
                                        <div v-else>
                                            <div class="percentage-value">{{ percentageMediums }}%</div>
                                            <div class="percentage-label-value">中等</div>
                                        </div>
                                    </template>
                                </el-progress>
                                <el-progress type="circle" :percentage="percentageDifficulty" :color= "'#E3771D'" @mouseover="flag004=true" @mouseleave="flag004=false">
                                    <template #default="{ percentageDifficulty }">
                                        <div v-if="flag004">
                                            <span class="percentage-value">{{ percentageDifficultyPass }}/{{ percentageDifficultyAll }}</span>
                                            <span class="percentage-label">已完成</span>
                                            
                                        </div>
                                        <div v-else>
                                            <div class="percentage-value">{{ percentageDifficultys }}%</div>
                                            <div class="percentage-label-value">困难</div>
                                        </div>
                                    </template>
                                </el-progress>
                                <el-progress type="circle" :percentage="percentageHell" :color= "'#D82A23'" @mouseover="flag005=true" @mouseleave="flag005=false">
                                    <template #default="{ percentageHell }">
                                        <div v-if="flag005">
                                            <span class="percentage-value">{{ percentageHellPass }}/{{ percentageHellAll }}</span>
                                            <span class="percentage-label">已完成</span>
                                        </div>
                                        <div v-else>
                                            <div class="percentage-value">{{ percentageHells }}%</div>
                                            <div class="percentage-label-value">地狱</div>
                                        </div>
                                    </template>
                                </el-progress>
                            </div>
                            <div class="progress-graph">
                                <div class="graph">
                                    <div class="graph-text">
                                        <div>
                                            <div class="graph-name" >单人排位</div>
                                        </div>
                                        <div>
                                            <div class="top">
                                                top
                                            </div>
                                            <div class="top-num">
                                                {{ topNum1 }}
                                            </div>
                                        </div>
                                        <div>
                                            <div class="ranking-num">
                                                {{ rankingNum1 }}
                                            </div>
                                            <div class="ranking-num-people">
                                                {{ rankingNumPeople1 }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="graph-label">
                                        <v-chart class="chart" :option="option1" autoresize @mouseover="overmouse1" @mouseout="outmouse1"  />
                                    </div>
                                </div>
                                <div class="line-string">
                                    <div class="I"></div>
                                </div>
                                <div class="graph">
                                    <div class="graph-text">
                                        <div>
                                            <div class="graph-name" >多人排位</div>
                                        </div>
                                        <div>
                                            <div class="top">
                                                top
                                            </div>
                                            <div class="top-num">
                                                {{ topNum2 }}
                                            </div>
                                        </div>
                                        <div>
                                            <div class="ranking-num">
                                                {{ rankingNum2 }}
                                            </div>
                                            <div class="ranking-num-people">
                                                {{ rankingNumPeople2 }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="graph-label">
                                        <v-chart class="chart" :option="option2" autoresize @mouseover="overmouse2" @mouseout="outmouse2"  />
                                    </div>
                                </div>
                            </div>
                            <div class="progress-graph">
                                <div class="graph">
                                    <div class="graph-text">
                                        <div>
                                            <div class="graph-name" >竞赛</div>
                                        </div>
                                        <div>
                                            <div class="top">
                                                top
                                            </div>
                                            <div class="top-num">
                                                {{ topNum3}}
                                            </div>
                                        </div>
                                        <div>
                                            <div class="ranking-num">
                                                {{ rankingNum3 }}
                                            </div>
                                            <div class="ranking-num-people">
                                                {{ rankingNumPeople3 }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="graph-label">
                                        <v-chart class="chart" :option="option3" autoresize @mouseover="overmouse3" @mouseout="outmouse3"  />
                                    </div>
                                </div>
                                <div class="line-string">
                                    <div class="I"></div>
                                </div>
                                <div class="grade">
                                    <div class="a-grade">
                                        <div class="top">单人排位分数</div>
                                        <div class="grade-num">{{rankingPersonNum1}}</div>
                                    </div>
                                    <div class="a-grade">
                                        <div class="top">多人排位分数</div>
                                        <div class="grade-num">{{rankingPersonNum2}}</div>
                                    </div>
                                    <div class="a-grade">
                                        <div class="top">竞赛分数</div>
                                        <div class="grade-num">{{rankingPersonNum3}}</div>
                                    </div>
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
import Header from "../../components/Header.vue"
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, } from 'vue';
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([GridComponent, BarChart, CanvasRenderer])



const Page=ref()


const percentageSimplePass=ref(20)
const percentageSimpleAll=ref(200)
const percentageCommonPass=ref(20)
const percentageCommonAll=ref(200)
const percentageMediumPass=ref(20)
const percentageMediumAll=ref(200)
const percentageDifficultyPass=ref(20)
const percentageDifficultyAll=ref(200)
const percentageHellPass=ref(20)
const percentageHellAll=ref(200)

const percentageSimple=ref((percentageSimplePass.value/percentageSimpleAll.value*100).toFixed(2))
const percentageCommon=ref((percentageCommonPass.value/percentageCommonAll.value*100).toFixed(2))
const percentageMedium=ref((percentageMediumPass.value/percentageMediumAll.value*100).toFixed(2))
const percentageDifficulty=ref((percentageDifficultyPass.value/percentageDifficultyAll.value*100).toFixed(2))
const percentageHell=ref((percentageHellPass.value/percentageHellAll.value*100).toFixed(2))


const percentageSimples=ref((percentageSimplePass.value/percentageSimpleAll.value*100).toFixed(2))
const percentageCommons=ref((percentageCommonPass.value/percentageCommonAll.value*100).toFixed(2))
const percentageMediums=ref((percentageMediumPass.value/percentageMediumAll.value*100).toFixed(2))
const percentageDifficultys=ref((percentageDifficultyPass.value/percentageDifficultyAll.value*100).toFixed(2))
const percentageHells=ref((percentageHellPass.value/percentageHellAll.value*100).toFixed(2))

const friendNum=ref(20)
const packpageNum=ref(20)
const userIntroduction=ref('钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱')
const progressNum =[{name:"数组",num1:100,num2:100},{name:"二分查找",num1:75,num2:100},{name:"哈希表",num1:70,num2:100}]
const datagraph1 = ref([])
const datagraph2 = ref([])
const datagraph3 = ref([])
const truedata1 = ref([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100])
const truedata2 = ref([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100])
const truedata3 = ref([10,20,30,40,50,60,70,80,90,100,10,20,30,40,50,60,70,80,90,100])
const topNum1 = ref()
const topNum2 = ref()
const topNum3 = ref()
const rankingNum1=ref()
const rankingNum2=ref()
const rankingNum3=ref()
const rankingNumPeople1=ref()
const rankingNumPeople2=ref()
const rankingNumPeople3=ref()
const rankingPersonNum1=ref(12345)
const rankingPersonNum2=ref(12345)
const rankingPersonNum3=ref(12345)
const flag01=Math.ceil(rankingPersonNum1.value/1000)-1
const flag02=Math.ceil(rankingPersonNum2.value/1000)-1
const flag03=Math.ceil(rankingPersonNum3.value/1000)-1
const dataProcessing1 = (truedata) =>{
    let sumdata=0;
    for(let i=0;i<truedata.length;i++){
        sumdata+=truedata[i];
    }
    for(let i=0;i<truedata.length;i++){
        if(i===flag01){
            datagraph1.value.push({
                value:Math.log(truedata[i]),
                itemStyle: {
                    color: 'red'
                }
            });
        }
        else{
            datagraph1.value.push(Math.log(truedata[i]));
        }
    }
}
dataProcessing1(truedata1.value)
const dataProcessing2 = (truedata) =>{
    let sumdata=0;
    for(let i=0;i<truedata.length;i++){
        sumdata+=truedata[i];
    }
    for(let i=0;i<truedata.length;i++){
        if(i===flag02){
            datagraph2.value.push({
                value:Math.log(truedata[i]),
                itemStyle: {
                    color: 'red'
                }
            });
        }
        else{
            datagraph2.value.push(Math.log(truedata[i]));
        }
    }
}
dataProcessing2(truedata2.value)
const dataProcessing3 = (truedata) =>{
    let sumdata=0;
    for(let i=0;i<truedata.length;i++){
        sumdata+=truedata[i];
    }
    for(let i=0;i<truedata.length;i++){
        if(i===flag03){
            datagraph3.value.push({
                value:Math.log(truedata[i]),
                itemStyle: {
                    color: 'red'
                }
            });
        }
        else{
            datagraph3.value.push(Math.log(truedata[i]));
        }
    }
}
dataProcessing3(truedata3.value)
const customColorMethod = (percentage) => {
  if (percentage < 30) {
    return '#909399'
  }
  if (percentage < 70) {
    return '#e6a23c'
  }
  return '#67c23a'
}
const flag0=ref(false)
const time0= ()=>setTimeout(()=>{
    flag0.value=false
    },220)
const flag1=ref(false)
const time1= ()=>setTimeout(()=>{
    flag1.value=false
    },220)
const flag2=ref(false)
const time2= ()=>setTimeout(()=>{
    flag2.value=false
    },220)
const flag001=ref(false)
const flag002=ref(false)
const flag003=ref(false)
const flag004=ref(false)
const flag005=ref(false)
const option1 = ref({
    grid: {
    bottom: 10,
    top: 10,
    left: 10,
    right: 10,

  },
  xAxis: {
    type: 'category',
    data: [],
    axisLine:{
      show:false,
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show:false
    },
    splitLine: {
      show:false
    }
  },
  series: [
    {
      data: datagraph1.value,
        itemStyle: {
            borderColor:'white',
            borderWidth: 3
        },

        emphasis: {
            itemStyle: {
                // 高亮时点的颜色。
                color: 'yellow'
            },
        },
        barCategoryGap: '0%',
        type: 'bar'
    }
  ],
})
const option2 = ref({
    grid: {
    bottom: 10,
    top: 10,
    left: 10,
    right: 10,

  },
  xAxis: {
    type: 'category',
    data: [],
    axisLine:{
      show:false,
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show:false
    },
    splitLine: {
      show:false
    }
  },
  series: [
    {
      data: datagraph2.value,
        itemStyle: {
            borderColor:'white',
            borderWidth: 3
        },

        emphasis: {
            itemStyle: {
                // 高亮时点的颜色。
                color: 'yellow'
            },
        },
        barCategoryGap: '0%',
        type: 'bar'
    }
  ],
})
const option3 = ref({
    grid: {
    bottom: 10,
    top: 10,
    left: 10,
    right: 10,

  },
  xAxis: {
    type: 'category',
    data: [],
    axisLine:{
      show:false,
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      show:false
    },
    splitLine: {
      show:false
    }
  },
  series: [
    {
      data: datagraph3.value,
        itemStyle: {
            borderColor:'white',
            borderWidth: 3
        },

        emphasis: {
            itemStyle: {
                // 高亮时点的颜色。
                color: 'yellow'
            },
        },
        barCategoryGap: '0%',
        type: 'bar'
    }
  ],
})
const topNumVelue1=(topNum)=>{
    let sumdata=0;
    let nowdata=0
    for(let i=0;i<truedata1.value.length;i++){
        sumdata+=truedata1.value[i];
        if(i<flag01){
            nowdata+=truedata1.value[i];
        }
    }
    topNum.value=((sumdata-nowdata)/sumdata*100).toFixed(2)+"%";
}
topNumVelue1(topNum1,truedata1,flag01)
const topNumVelue2=(topNum)=>{
    let sumdata=0;
    let nowdata=0
    for(let i=0;i<truedata2.value.length;i++){
        sumdata+=truedata2.value[i];
        if(i<flag02){
            nowdata+=truedata2.value[i];
        }
    }
    topNum.value=((sumdata-nowdata)/sumdata*100).toFixed(2)+"%";
}
topNumVelue2(topNum2)
const topNumVelue3=(topNum)=>{
    let sumdata=0;
    let nowdata=0
    for(let i=0;i<truedata3.value.length;i++){
        sumdata+=truedata3.value[i];
        if(i<flag03){
            nowdata+=truedata3.value[i];
        }
    }
    topNum.value=((sumdata-nowdata)/sumdata*100).toFixed(2)+"%";
}
topNumVelue3(topNum3)
const overmouse1=(params)=>{
    datagraph1.value[flag01].itemStyle.color='blue'
    rankingNumPeople1.value=truedata1.value[params.dataIndex]+"用户"
    let sumdata=0;
    let nowdata=0
    for(let i=0;i<truedata1.value.length;i++){
        sumdata+=truedata1.value[i];
        if(i<params.dataIndex){
            nowdata+=truedata1.value[i];
        }
    }
    topNum1.value=((sumdata-nowdata)/sumdata*100).toFixed(2)+"%";
    rankingNum1.value=(0+params.dataIndex*1000)+"-"+(0+(params.dataIndex+1)*1000)
}
const overmouse2=(params)=>{
    datagraph2.value[flag02].itemStyle.color='blue'
    rankingNumPeople2.value=truedata2.value[params.dataIndex]+"用户"
    let sumdata=0;
    let nowdata=0
    for(let i=0;i<truedata2.value.length;i++){
        sumdata+=truedata2.value[i];
        if(i<params.dataIndex){
            nowdata+=truedata2.value[i];
        }
    }
    topNum2.value=((sumdata-nowdata)/sumdata*100).toFixed(2)+"%";
    rankingNum2.value=(0+params.dataIndex*1000)+"-"+(0+(params.dataIndex+1)*1000)
}
const overmouse3=(params)=>{
    datagraph3.value[flag03].itemStyle.color='blue'
    rankingNumPeople3.value=truedata3.value[params.dataIndex]+"用户"
    let sumdata=0;
    let nowdata=0
    for(let i=0;i<truedata3.value.length;i++){
        sumdata+=truedata3.value[i];
        if(i<params.dataIndex){
            nowdata+=truedata3.value[i];
        }
    }
    topNum3.value=((sumdata-nowdata)/sumdata*100).toFixed(2)+"%";
    rankingNum3.value=(0+params.dataIndex*1000)+"-"+(0+(params.dataIndex+1)*1000)
}
const outmouse1=()=>{
    datagraph1.value[flag01].itemStyle.color='red'
    rankingNum1.value=''
    rankingNumPeople1.value=''
    topNumVelue1(topNum1)
}
const outmouse2=()=>{
    datagraph2.value[flag01].itemStyle.color='red'
    rankingNum2.value=''
    rankingNumPeople2.value=''
    topNumVelue1(topNum2)
}
const outmouse3=()=>{
    datagraph3.value[flag02].itemStyle.color='red'
    rankingNum3.value=''
    rankingNumPeople3.value=''
    topNumVelue1(topNum3)
}
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
    padding: 20px 40px;
    margin: 0 70px;
}
.first-floor{
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    flex-grow: 1;
    align-items: center;
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
.personal-title{
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
    padding: 20px 40px;
}
.progress{
    background-color: white;
    box-shadow: 0 0 10px rgb(201, 201, 201) ;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    margin-left: 27px;
}
.progress .el-progress--circle {
  margin-right: 20px;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 25px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.percentage-label-value {
  display: block;
  margin-top: 10px;
  font-size: 16px;
}
.personal-information{
    padding: 20px 16px 0 16px;
    background-color: white;
    box-shadow: 0 0 10px rgb(201, 201, 201) ;
    border-radius: 16px;
    width: 300px;
}
.personal-information-item{
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100%;
    padding: 20px 0;
}
.I{
    height: 100%;
    border: 1px solid rgb(202, 202, 202);
}
.backpage{
    height: 100%;
    margin: 0 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}
.friend{
    height: 100%;
    margin: 0 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
}
.friend-item-text{
    font-size: 1.3rem;
}
.backpage-item-text{
    font-size: 1.3rem;
}
.button-friend{
    display: flex;
    justify-content: center;
}
.button-size{
    width: 200px;
}
.personal-information-text{
    padding: 10px;
}
.personal-information-text-title{
    font-size: 1.1rem;
    font-weight: 1000;
    padding-bottom: 8px;
}
.personal-information-text-content{
    font-size: 0.9rem;
    width: 100%;
    word-wrap:break-word;
}
.line-string{
    margin: 10px 0;
}
.skill{
    padding: 8px 0;
}
.progress-size{
    height: 20px;
}
:deep(.skill:hover .el-progress-bar__outer){
    height: 20px !important;
    width: 100% !important; 
}
:deep(.skill:hover .el-progress-bar){
    width: 100% 
}
:deep(.progress-size .el-progress-bar){
    width: 80%;
    flex-grow: 0;
    transition: width 0.4s;
}
:deep(.progress-size .el-progress__text){
    min-width: none;
}
:deep(.progress-size .el-progress){
    height: 22px;
}
:deep(.progress-size .el-progress-bar__outer){
    transition: all 0.4s ;

}
.echarts {
  height: 200px;
  width: 350px;
}
.graph-text{
    display: flex;
}
.top{
    padding: 0 10px 0 0;
    font-weight: 100;
    font-size: 0.8rem;
}
.top-num{
    padding: 0 10px 0 0;
    font-weight: 500;
    font-size: 1.5rem;
    width: 80px;
}
.ranking-num{
    font-weight: 100;
    font-size: 0.8rem;
    padding: 0 0 0 10px;
}
.ranking-num-people{
    font-size: 1rem;
    padding: 0 0 0 10px;
}
.ranking{
    padding: 0 0 0 10px;
}
.graph-name{
    font-size: 1rem;
    padding: 0 10px 0 0;
}
.progress-graph{
    background-color: white;
    box-shadow: 0 0 10px rgb(201, 201, 201) ;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 20px;
    margin-left: 27px;
    display: flex;
}
.graph{
    margin: 0 10px;
}
.a-grade{
    margin: 30px 20px;
}
.progress-text{
    display: block;
    margin-bottom: 10px;
    font-size: 1.5rem;
}
.progress-label{
    display: block;
    font-size: 0.9rem;
}
</style>