var controller = angular.module('app').controller('loginControl',['$scope','$window','$cookies',function($scope,$window,$cookies){
  $scope.logIn = function(){
    console.log($scope.userName)
    if(!$scope.userName){
      alert('用户名不能为空！')
      return false
    }
    if($scope.userName == $scope.pwd){
      $cookies.put('userName',$scope.userName)
      $window.location.href = '/' ////页面跳转
    }
    else{
      alert('密码输入错误！')
    }
  }
}])

module.exports = controller
