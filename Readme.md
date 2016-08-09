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

#### 待新增功能
```
表单验证部分内容
```
