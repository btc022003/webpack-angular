var controller = angular.module('app').controller('listController', ['$scope', 'commonServices','myInputFilter', function($scope, c_s,myInput) {
    c_s.getAddress().then(function(res){
        $scope.data = res.data
    })
}])


module.exports = controller
