var demo = require('../common/demo')
require('../common/address')

var main = angular.module('app').controller('mainController',['$scope','$http',function($scope,$http){
  $scope.user = {"name":"Tom","age":18}
  $http.get('http://lixuanqi.com/api/v1/address/get_data.json').then(function(res){
      console.log(res)
      $scope.address = res.data.data
      $scope.selProvinceChange = function(){
        console.log(this)
        console.log($scope.selProvice)
      }
    })
    demo.obj.getData()
    demo.obj.hehe()
}])

module.exports = main
