var controller = angular.module('app').controller('aboutController',['$scope','$route', '$routeParams', '$location',function($scope,$route, $routeParams, $location){
  console.log($route)
  console.log($routeParams)
  console.log($location)
  $scope.info = {name:'Arivin',blog:'http://www.lixuanqi.com'}
}])

module.exports = controller
