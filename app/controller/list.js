var controller = angular.module('app').controller('listController', ['$scope', 'commonServices', function($scope, c_s) {
    c_s.getAddress().then(function(res){
        $scope.data = res.data
    })
}])


module.exports = controller
