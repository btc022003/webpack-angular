angular.module('app').controller('formController',['$scope',function($scope){
  console.log('init form ctrl')
}])

/**
 * 使用了angular.module('app')直接把控制器注入了应用程序 无需导出module也可以直接使用
 */
//module.exports = controller
