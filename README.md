# LoopCodePlus_vue_5

#### 介绍
在线编程教学与竞赛平台前端仓库

#### 状态

此项目正在积极开发中，各功能还不稳定，以下是部分模块进度（勾选模块为基本可以正常使用）：

- [x] 注册/登录
- [x] 浏览公共题目、查看题目、创建题目
- [ ] 修改题目、删除题目
- [ ] 题目集
- [x] LCPlab
- [ ] 主页
- [ ] 搜索
- [ ] 竞赛
- [ ] 课程
- [ ] 题解
- [ ] 个人空间
- [ ] 商店
- [ ] 背包

#### 软件架构
整体项目采用BS架构，此仓库为Web前端仓库。

前端项目在模式上使用了MVVM，框架上采用Vue3+Vite

#### 开发者介绍

- Hhzyouth 黄梓洋
- 张庆豪 张庆豪
- 熊俊豪 熊俊豪
- CLittleTree 陈文杰

#### 安装教程

1.  在终端使用<code>git clone https://gitee.com/Hhzyouth/loop-code-plus_vue_5.git</code>将项目克隆到本地
2.  自行安装Vue3，Vite，Node.js等必要工具
3.  在终端中的<code>X:\\......\loop-code-plus_vue_5\project\loop-code-plus-vue-5</code>目录下使用<code>npm install</code>

#### 使用说明

1. 在开发环境（如：VScode）中的终端中的上述目录下使用<code>npm run dev</code>然后在浏览器地址栏中使用终端中展示出的链接打开此项目网页

2. 部分功能需要与后端配合使用，如果发生请求地址错误请在vite.config.js文件中做以下修改

   ```
   server: {
     proxy: {
      '/api': {
       target: ' http://xxx.xxx.xxx.xxx:8080/', // 此处填写后端服务器对应的IP地址
       changeOrigin: true,
       rewrite: path => path.replace(/^\/api/, '') 
      }
     }
    }
   ```

   

3. 其他后端相关问题请参考[LoopCodePlus_admin_5: 在线编程教学平台后端仓库 (gitee.com)](https://gitee.com/Hhzyouth/loop-code-plus_admin_5)中的内容

#### 参与贡献

1.  使用中发现问题可以在Issues中提出，如果看到会一一回复。
2.  可以使用PR参与到项目贡献中。
3.  未尽事宜也可以私信我，我会尽可能回复。
