var controller = angular.module('app').controller('loginControl',['$scope','$window','$cookies','commonServices',function($scope,$window,$cookies,c_s){
  $scope.logIn = function(){
    console.log($scope.userName)

    c_s.person_update({name:"小明",age:18}).then(function(res){
      console.log(res)
    })

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
