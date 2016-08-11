angular.module('app').controller('navController', ['$scope', function($scope) {
    $scope.data = [{
        label: "首页",
        link: "#/"
    }, {
        label: "表单",
        link: "#/form"
    }]
}])
