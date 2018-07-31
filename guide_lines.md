# Web前端技术规范标准
#### 最后修改于：2018-07-31
#### 作者:[陆欢](mailto:luhuan@fosun.com)
______________________________
## 概览

* ### 业务场景:
    1. PC端中后台
    2. 复星通内H5应⽤
    
* ### UI
    1. 样版页面的在线demo
    2. 通⽤素材资源下载

* ### 技术
    1. MVC框架和语言
    2. 登陆认证&接⼝鉴权
    3. UI组件
    4. 第三方库
    5. H5应⽤与钉钉的集成

* ### 开发流程
    1. 搭建开发环境
    2. 生成Vue项目
    3. 目录结构和文件命名规范
    4. WorkFlow
    5. 规范和FAQ

* ### 质量和性能要求
    1. 兼容性要求
    2. 优化方法
    3. 通用标准
    4. 移动端标准
    5. 文档规范

* ### 部署生产
    1. 上线检查清单
    2. 打包规范
    3. 部署流程
    
* ### 附录
    1. 文档和资源链接
    
______________________________
## 正文

### 业务场景
#### PC端中后台
> 适用于中后台操作管理系统，使用CAS单点登陆。

[模版地址](#)

    
#### 复星通内H5应⽤
> 适用于复星通内，使用钉钉账号登录，调用钉钉JavaScript API

[模版地址](#)


### UI
1. [PC端中后台样版页面]()
2. [复星通内H5应⽤样版页面]()
3. [通⽤素材资源下载]()

### 技术
#### MVC框架和语言
1.    使用**Vue.js**和相关技术开发:
      * MVC框架: [Vue.js](https://cn.vuejs.org/v2/guide/)
      * 路由: [Vue Router](https://router.vuejs.org/zh/)
      * 状态管理：[Vuex](https://vuex.vuejs.org/zh/)
      
2.    编程语言:
      * ECMAScript 2017
        - 异步函数推荐使用[async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function),[await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)语法，或[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
        - 注意对[低版本浏览器](https://caniuse.com)使用[语法polyfill](https://babeljs.io/docs/en/babel-polyfill#docsNav)
      * 样式：命名规则遵循[BEM方法](http://getbem.com/introduction/)，并使用以下一种预处理语言：
        - [Stylus](http://stylus-lang.com/)
        - [SASS/SCSS](https://devhints.io/sass)

#### 登陆认证&接⼝鉴权
1.    [登陆认证](#)
2.    [接⼝鉴权](#)

#### UI组件库
1.    PC端：[Element UI](http://element-cn.eleme.io/#/zh-CN/component/installation)
2.    移动端: [Mand Mobile](https://didi.github.io/mand-mobile/#/zh-CN/docs/introduce)

#### 第三方库
1. Vue.js相关
   * [vue-meta](https://www.npmjs.com/package/vue-meta)：动态生成document.title
   * [vuex-persistedstate](https://www.npmjs.com/package/vuex-persistedstate): 自动用localstorage缓存Vuex状态
   
2. Ajax库
   * [axios](https://www.npmjs.com/package/axios): 基于[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)的HTTP客户端
   
3. 日期时间库
   * [fecha](https://www.npmjs.com/package/fecha): 轻量级日期格式化/解析（2KB）
   
4. 图表类
   * 移动端：[蚂蚁金服F2](http://antv.alipay.com/zh-cn/f2/3.x/demo/index.html)
   * 一般二维图表：[蚂蚁金服G2](http://antv.alipay.com/zh-cn/g2/3.x/demo/index.html)
   * 地图：[百度地图](http://lbsyun.baidu.com/index.php?title=jspopular)、[ECharts](http://echarts.baidu.com/examples/#chart-type-map)
   * 流程图：[蚂蚁金服G6](http://antv.alipay.com/assets/dist/3.0.0/g6/1.x/editor/base.html)
   * 关系型网络：[蚂蚁金服G6](http://antv.alipay.com/zh-cn/g6/1.x/index.html)，[vis.js](http://visjs.org/network_examples.html)

#### H5应⽤与钉钉的集成
> TODO

### 开发流程
#### 搭建开发环境
1. 安装[Node.js](https://nodejs.org/en/download/)
2. 在～/下创建.npmrc文件, 写入：`registry=https://registry.npm.taobao.org`
3. 更新npm,(使用管理员权限)执行: `npm i -g npm` 
4. 安装[vue-cli](https://www.npmjs.com/package/vue-cli), (使用管理员权限)执行: `npm install -g vue-cli`。

   获得命令行工具vue。
   > vue-cli是Vue.js官方的脚手架项目生成工具
   

#### 生成Vue项目
1. 执行: `vue init webpack 新项目名` 生成项目目录（详见[文档](https://github.com/vuejs-templates/webpack)）
    
   或者获取定期维护更新的预定义模版: [PC端中后台](#), [复星通内H5应⽤](#)

2. 进入项目目录：`cd 新项目名/`

   安装依赖包：`npm install`
   
   ⚠️注意：
   > 
        会打进生产包的库应当用: npm install --save '包名字'  来安装, 对应package.json的dependencies字段
        其余库应当用: npm install --save-dev '包名字'  来安装, 对应package.json的devDependencies字段

#### 目录结构和文件命名规范

按照以上步骤生成的src/目录中，应当有：

- `router/` 路由相关
- `components/` 可复用的组件
- `pages/` 页面模块, 如有子页面就建子目录
- `services/` 服务：
    1. 用axios封装后的API列表
    2. Vue的[过滤器](https://cn.vuejs.org/v2/guide/filters.html)
    3. 封装后的网络请求库
    4.  其它需要按需注入的服务
- `store/` 对[Vuex](https://vuex.vuejs.org/zh/)的封装，包括[store](https://vuex.vuejs.org/zh/guide/state.html)，[mutations](https://vuex.vuejs.org/zh/guide/mutations.html)，[actions](https://vuex.vuejs.org/zh/guide/actions.html)等
- `assets/` 需要用[webpack loaders](https://webpack.docschina.org/concepts/loaders/)处理的静态资源

#### WorkFlow

* 进入项目目录：`cd 新项目名/`
* 开发模式： `npm start`
* 打生产包： `npm run build`
* 更新依赖包： `npm update`

_详见`package.json`的'scripts'字段_


#### 规范和FAQ

* 项目根目录下要有`README.md`文件，重点描述：
    - 开发，测试和生产环境的命令，
    - 开发，测试和生产环境的线上地址
    - 生产环境的缓存和更新机制
    - 登陆认证方式
    - 接口鉴权方式
    - 注意事项，
        1. 如有加密规范，在此说明
        2. 如有对Web服务器有特殊配置，在此说明
        3. 如有跨域情况，在此说明
        4. 如有嵌套/被嵌套`<iframe/>`情况，在此说明
        5. 对cookie，sessionStorage，localStorage的使用
        6. 对网络请求Header字段的使用
    
* 不能手工改动`node_modules/`目录下任何文件

* Git库至少有2个分支： 开发&生产环境


### 质量和性能要求

#### 兼容性要求
> TODO

#### 优化方法

* 寻找问题：
    1. 使用[webpack-bundle-analyzer](https://www.npmjs.com/search?q=webpack-bundle-analyzer)检查原因
    2. Chrome DevTools > ['Audits'](https://developers.google.com/web/tools/lighthouse/#devtools) （至少运行3次）
    3. [webpagetest](https://www.webpagetest.org/) （外网在线测试）
    
* 比照[清单](https://apiumhub.com/tech-blog-barcelona/web-performance-optimization-techniques/)检查

* 去除无用代码
  - 工具：Chrome DevTools > “更多工具” > “覆盖测试”, 遍历所有页面，触发工具计算已用&未用代码百分比

* 使用webpack优化代码
  - [webpack拆分代码](https://webpack.docschina.org/guides/code-splitting/)
  - [webpack的tree shaking](https://webpack.docschina.org/guides/tree-shaking/)
  - [用webpack的import()方法条件加载](https://webpack.js.org/api/module-methods/#import-)
  - [webpack的懒加载](https://webpack.docschina.org/guides/lazy-loading/)
  - 使用第三方库的ES6 Module优化版（打包后获得更小体积），详见:[不同版本lodash引入方式对bundler大小影响](https://www.blazemeter.com/blog/the-correct-way-to-import-lodash-libraries-a-benchmark)
      
      
* 使用webpack优化资源
  - 素材使用对应[webpack loaders](https://webpack.docschina.org/concepts/loaders/)压缩处理

#### 通用标准

* 单个静态资源文件大小不超过400K


#### 复星通H5标准

* 对用户的交互响应时间 < 100ms
* 一帧动画/滚动页面 < 10ms，无延迟/卡顿/抖动
* 从页面空白到可以交互，时间在4秒以内，目标在2秒以内；后续页面加载时间 < 1秒
* 利用空闲时间执行资源/时间开销大的任务，如预加载页面/资源/Ajax请求

#### 文档规范