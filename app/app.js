import angular from 'angular'
// var angular = require('angular')
// require('angular-route')
import ngRoute from 'angular-route'
// require('angular-cookies') ////引入angular-cookies模块
import ngCookies from 'angular-cookies'
// require('angular-animate')
import ngAnimate from 'angular-animate'
// require('highcharts')
var Highcharts = require('highcharts')

////通过此方法解决报错提示 Highcharts is not defined
///通过全局暴露一个变量的方式解决此问题
window.Highcharts = Highcharts



require('highcharts-ng')

// console.log(tplMain)


var app = angular.module('app', ['ngRoute', 'ngCookies','ngAnimate','highcharts-ng'])

/////引入模版,为了更加的增强模块化的概念引入html-loader插件实现代码的预加载
var tplMain = require('./tpl/main')
var tplAbout = require('./tpl/about')
var tplLogin = require('./tpl/login')
var tplList = require('./tpl/list')
var tplForm = require('./tpl/form')


var commonServices = require('./services/common_services')

/////使用factory方式创建一个service
app.factory('commonServices', ['$http', '$q', commonServices])

/**
 * 自定义filter
 * 在list控制器中使用自定义filter
 * 在使用的时候注意注入的时候需要在名字后面加关键字后缀Filter
 * @param  {[string]} myInput [filter的名字]
 * @param  {[function]} function [description]
 * @return {[function]}          [description]
 */
app.filter('myInput',function(){
  return function(data,para){
        return para + data
    }
})

////引入控制器部分
require('./controller/main_controller')
require('./controller/about_controller')
require('./controller/login_controller')
require('./controller/list_controller')
require('./controller/form_controller')
require('./controller/nav_controller')

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
        .when('/form',{
          template:tplForm,
          controller:'formController'
        })
        .otherwise({
            redirectTo: '/'
        })
}])
