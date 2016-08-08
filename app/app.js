var angular = require('angular')
require('angular-route')
require('angular-cookies') ////引入angular-cookies模块


console.log(tplMain)


var app = angular.module('app', ['ngRoute', 'ngCookies'])
    /////引入模版,为了更加的增强模块化的概念引入html-loader插件实现代码的预加载
var tplMain = require('./tpl/main.html')
var tplAbout = require('./tpl/about.html')
var tplLogin = require('./tpl/login.html')
var tplList = require('./tpl/list.html')

var commonServices = require('./services/common_services')
app.factory('commonServices', ['$http', '$q', commonServices])

////引入控制器部分
require('./controller/main')
require('./controller/about')
require('./controller/login')
require('./controller/list')

/////使用factory方式创建一个service
app.factory('checkoutLogined', ['$cookies',function($cookies) {
    var validate = {}
    validate.isLogined = function() {
        if ($cookies.get('userName')) {
            return true
        } else {
            return false
        }
    }
    return validate
}])

/////路由改变之前调用 用于权限判断
angular.module('app').run(['$rootScope', '$location','checkoutLogined',function($rootScope, $location,checkoutLogined){
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if(!checkoutLogined.isLogined()){
        // next()
        $location.path('/login'); ////没有登陆就跳转到登录页面
    }
  })
}])

/////在config中使用provider的时候需要在provider的后面加上关键字Provider
angular.module('app').config(['$routeProvider',function($routeProvider) {
    $routeProvider
        .when('/', {
            template: tplMain,
            controller: 'mainController',
            controllerAs: 'main'
        })
        .when('/about/:id', {
            template: tplAbout,
            controller: 'aboutController'
        })
        .when('/login', {
            template: tplLogin,
            controller: 'loginControl'
        })
        .when('/list',{
          template:tplList,
          controller:'listController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])
