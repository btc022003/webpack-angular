#### 说明
结合webpack实现angularjs的模块化项目框架搭建  
结合webpack使前端开发更符合nodejs的打开方式  
使用require方式引入模块  
通过npm实现前后端的统一模块化管理  
```
基础框架已经可以走通(包括路由跳转和权限控制以及api服务基础已搭建好)
只是实现了一些简单的功能,后续会继续增加新的功能
webpack引入es6的语法暂时存在问题没有解决
```
* 发现一个问题
> 我在js文件中执行module.exports依然可以使用,应该是因为使用了angular.modile('app').xxx做了注入的原因  
有些没有使用此方法的模块文件就无法直接使用 必须进行导出如:services/common_services.js文件

#### 各页面功能说明
```
#/login 登录页面,只要输入的用户名和密码一致即可登录
#/about 基础绑定效果
#/list filter演示
#/main 自定义控件效果展示
#/form  表单验证部分内容
```

> 在页面中实现导航数据的通用加载方式
```html
<!--通过在index.html设置一个控制器的方式实现在代码中能动态读取数据-->
<body ng-app="app" ng-controller="navController">
    <a href="#/">index</a>
    <a href="#/about/tom">about</a>
    <a href="#/login">login</a>
    <a href="#/list">login</a>
    <a href="#/form">form</a>
    <a ng-repeat="item in data" href="{{item.link}}">{{item.label}}</a>
    <div ng-view>
    </div>
    <script src="bundle.js"></script>
</body>
```

#### 关于使用es6语法的问题

> 如果在webpack中使用es6的语法,需要babel-loader插件的引入.在使用的时候6.0的新版本插件配置和以前不同,需要注意

```
需要安装
  npm install babel-preset-es2015 --save

在配置文件做相应的调整
  {
    test:/\.jsx?$/,
    exclude:/node_modules/,
    loader:'babel',
    query: {
      presets: ['es2015']
    }
  }
```

#### 待新增功能
```
表单验证部分内容
使用bootstrap做代码界面优化
```
