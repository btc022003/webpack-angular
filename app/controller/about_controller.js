var controller = angular.module('app').controller('aboutController', ['$scope', '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location) {
    console.log($route)
    console.log($routeParams)
    console.log($location)
    $scope.info = {
            name: 'Arivin',
            blog: 'http://www.lixuanqi.com'
        }
        //This is not a highcharts object. It just looks a little like one!
    $scope.chartConfig = {

        options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here.
            //will be overriden by values specified below.
            chart: {
                type: 'bar'
            },
            tooltip: {
                style: {
                    padding: 10,
                    fontWeight: 'bold'
                }
            }
        },
        //The below properties are watched separately for changes.

        //Series object (optional) - a list of series using normal Highcharts series options.
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        //Title configuration (optional)
        title: {
            text: 'Hello'
        },
        //Boolean to control showing loading status on chart (optional)
        //Could be a string if you want to show specific loading text.
        loading: false,
        //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
        //properties currentMin and currentMax provided 2-way binding to the chart's maximum and minimum
        xAxis: {
            currentMin: 0,
            currentMax: 20,
            title: {
                text: 'values'
            }
        },
        //Whether to use Highstocks instead of Highcharts (optional). Defaults to false.
        useHighStocks: false,
        //size (optional) if left out the chart will default to size of the div or something sensible.
        size: {
            width: 400,
            height: 300
        },
        //function (optional)
        func: function(chart) {
            //setup some logic for the chart
        }
    };
}])

module.exports = controller
