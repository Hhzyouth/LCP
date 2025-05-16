import{al as O,az as j,an as G,am as J,K as b,t as f,aD as K,aE as P,o as v,f as y,m as t,k as n,ao as A,ap as Q,p as s,F as W,v as X,x as r,a7 as E,aq as Y,a9 as Z,at as ee,as as oe,y as te}from"./index-BXCC11IL.js";import{E as ae,a as le}from"./el-form-item-Q5sLgxw0.js";/* empty css                          */import{a as ne,E as se}from"./el-checkbox-CvFIqMOL.js";import{T as re,E as de}from"./style-BQw9nljF.js";import{a as ue,s as ie}from"./solution-BKf-_f2T.js";/* empty css                   */import{E as i}from"./index-e590A-XK.js";import"./castArray-BxmzwEdl.js";import"./_baseClone-ByGl8-Fj.js";import"./_Uint8Array-KkRCjyoh.js";import"./isEqual-W0GA-HSG.js";const ce={class:"Header-Main-container"},me={class:"container"},pe={style:{"max-width":"600px",flex:"1 1",height:"100%","overflow-y":"auto"}},fe={style:{width:"100%",display:"flex","justify-content":"end"}},_e={style:{border:"1px solid #ccc",flex:"1 1","min-width":"200px",margin:"0 0 0 16px","z-index":"1",display:"flex","flex-direction":"column"}},ge={class:"edit-top"},he={__name:"EditSolution",setup(xe){const V=j(),c=G(),I=J(),{es:_,esp:C}=V.params,e=b({userId:0,solutionId:null,problemId:C,solutionName:"",content:"",tag:[]}),g=f(),m=K(),k=()=>{e.userId=I.userId,console.log(e),ie(e).then(o=>{o.data.code===200?(i({message:"题解已发布",type:"success"}),setTimeout(()=>{c.go(0)},1e3)):i({message:"发布失败，请重试",type:"warning"})}).catch(o=>{console.log(o)})};P(()=>{const o=m.value;o!=null&&o.destroy()});const N=o=>{m.value=o},w=()=>{e.content=""},S=()=>{e.content=`<h2>题目名字</h2>   
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
`},F=()=>{e.content=`<h2>数组求和</h2>   
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
`},R={},U={placeholder:"题目描述......<p></p>建议使用模板快速建成框架并提高规范性"},h=f("default"),q=f(""),B=["哈希表","树","二叉树","堆","栈","图","链表","集合","队列","双向链表","二叉搜索树","强连通分量","最小生成树","并查集","字典树","线段树","树状数组","后缀数组","动态规划","贪心","深度优先搜索","二分查找","广度优先搜索","回溯","递归","分治","记忆化搜索","归并排序","快速选择","数组","字符串","矩阵"];_!=="0"&&ue(parseInt(_)).then(o=>{o.data.code===500?(c.go(-1),i.error("你无权限编辑此题解")):(console.log(o),e.solutionId=o.data.data.solutionId,e.solutionName=o.data.data.solutionName,e.content=o.data.data.content,e.tag=JSON.parse(o.data.data.tag))}).catch(o=>{c.go(-1),i({type:"error",message:"网络错误"})});const H=b({solutionName:[{required:!0,message:"题目名称不能为空",trigger:"blur"}],tag:[{required:!0,message:"标签不能为空",trigger:"blur"}]}),$=async o=>{o&&await o.validate((a,p)=>{a&&e.content!==""?(k(),console.log("submit!")):console.log("error submit!",p)})};return(o,a)=>{const p=Y,x=Z,d=ae,D=se,T=ne,u=ee,M=le,z=oe,L=A;return v(),y("div",ce,[t(L,{class:"elcontainer"},{default:n(()=>[t(p,{class:"header"},{default:n(()=>[t(Q,{page:q.value},null,8,["page"])]),_:1}),t(z,{class:"elmain"},{default:n(()=>[s("div",me,[s("div",pe,[t(M,{model:e,"label-width":"auto",rules:H,ref_key:"ruleFormRef",ref:g},{default:n(()=>[t(d,{label:"题解ID"},{default:n(()=>[t(x,{modelValue:e.solutionId,"onUpdate:modelValue":a[0]||(a[0]=l=>e.solutionId=l),disabled:"",placeholder:"题解ID会自动生成"},null,8,["modelValue"])]),_:1}),t(d,{label:"题解名称",required:"",prop:"solutionName"},{default:n(()=>[t(x,{modelValue:e.solutionName,"onUpdate:modelValue":a[1]||(a[1]=l=>e.solutionName=l),placeholder:"请输入题目名称"},null,8,["modelValue"])]),_:1}),t(d,{label:"标签",required:"",prop:"tag"},{default:n(()=>[t(T,{modelValue:e.tag,"onUpdate:modelValue":a[2]||(a[2]=l=>e.tag=l)},{default:n(()=>[(v(),y(W,null,X(B,l=>t(D,{value:l,name:"type"},{default:n(()=>[r(te(l),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),_:1}),t(d,null,{default:n(()=>[s("div",fe,[t(u,{type:"success",onClick:a[3]||(a[3]=l=>$(g.value))},{default:n(()=>[r("确认并保存")]),_:1})])]),_:1})]),_:1},8,["model","rules"])]),s("div",_e,[s("div",ge,[t(u,{text:"",onClick:a[4]||(a[4]=l=>S())},{default:n(()=>[r("初始化模板")]),_:1}),t(u,{text:"",onClick:a[5]||(a[5]=l=>F())},{default:n(()=>[r("模板样例")]),_:1}),t(u,{text:"",onClick:a[6]||(a[6]=l=>w())},{default:n(()=>[r("清空内容")]),_:1})]),t(E(re),{style:{"border-bottom":"1px solid #ccc"},editor:m.value,defaultConfig:R,mode:h.value},null,8,["editor","mode"]),t(E(de),{style:{flex:"1","overflow-y":"hidden"},modelValue:e.content,"onUpdate:modelValue":a[7]||(a[7]=l=>e.content=l),defaultConfig:U,mode:h.value,onOnCreated:N},null,8,["modelValue","mode"])])])]),_:1})]),_:1})])}}},Re=O(he,[["__scopeId","data-v-ac0ee963"]]);export{Re as default};
