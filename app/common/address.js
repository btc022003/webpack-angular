var addressSelect = angular.module('app').directive('addressSelect', ['commonServices', '$http', function(c_s, $http) {
    return {
        // 限制指令的使用方式：
        //E - 元素名称： <my-directive></my-directive>
        //A - 属性名： <div my-directive="exp"></div>
        //C - class名： <div class="my-directive:exp;"></div>
        //M - 注释 ： <!-- directive: my-directive exp -->
        restrict: 'E',
        // 当指令以标签方式使用的时候，指定transclude为true可以
        // 使用标签支持嵌套内容，而且在模板中还可以通过ng-transclude
        // 指令控制嵌套内容出现的位置
        transclude: true,
        // 指令模板，也可将模板放入其它文件，使用templateUrl导入
        // 如果以AC方式使用指令，模板将成为指令所在标签的子标签
        template: '<select ng-model="selProvice" ng-change="selProvinceChange()" ng-options="item.name for item in addressProvince"></select>' +
            '<select ng-model="selCity" ng-change="selCityChange()" ng-options="item.name for item in addressCity"></select>' +
            '<select ng-model="selArea" ng-options="item.name for item in addressArea"></select>',



        // 指令关联的控制器
        controller: ['$scope', '$http', function($scope, $http) {
            console.log(c_s)
                // console.log($attr)
            c_s.getAddress().then(function(res) {
                console.log(res)
                $scope.addressProvince = res.data
                    // 初始化的时候选中
                if ($scope.initPId) {
                    $scope.selProvice = $scope.addressProvince.filter(function(item) {
                        return item.id == $scope.initPId
                    })[0]
                    $scope.selProvinceChange()
                }
                // $scope.selProvice = $scope.addressProvince[5]
                // $scope.selProvinceChange()
            })

            //////省份选择改变
            $scope.selProvinceChange = function() {
                c_s.getAddress('city', $scope.selProvice.id).then(function(res) {
                    $scope.addressCity = res.data
                        /////初始化地市数据
                    if ($scope.initCId) {
                        $scope.selCity = $scope.addressCity.filter(function(item) {
                            return item.id == $scope.initCId
                        })[0]
                        $scope.selCityChange()
                    }
                })
            }

            /////地市选择改变
            $scope.selCityChange = function() {
                    c_s.getAddress('area', $scope.selCity.id).then(function(res) {
                        $scope.addressArea = res.data
                            /////初始化区县数据
                        if ($scope.initAId) {
                            $scope.selArea = $scope.addressArea.filter(function(item) {
                                    return item.id == $scope.initAId
                                })[0]
                                //  $scope.selAreaChange()
                        }
                    })
                }
                // $http.get('http://lixuanqi.com/api/v1/address/get_data.json').then(function(res) {
                //     console.log(res)
                //     $scope.addressProvince = res.data.data
                //     $scope.selProvinceChange = function() {
                //         console.log(this)
                //         console.log($scope.selProvice)
                //         $http.get('http://lixuanqi.com/api/v1/address/get_data.json?tag=city&fid='+$scope.selProvice.id).then(function(res){
                //           $scope.addressCity = res.data.data
                //         })
                //     }
                // })
        }],

        /////通过此方法为自定义指令绑定自己的命名空间 可以在同一个控制器中多次使用此自定义控件
        ///使用方法 <address-select info="first"></address-select>
        ///<address-select info="second"></address-select>
        scope: {
            customerInfo: '=info'
        },
        // 在自定义指令中如果要操作标签元素需要使用这个方法
        // 注意此方法对于每一个标签只会调用一次
        // scope为scode
        // ele为 JQLite element标签内容
        // attrs为属性信息
        link: function(scope, ele, attrs) {
            // ele.on('click', function() {
            //     var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
            //     alert('您好，今天是' + weeks[new Date().getDay()])
            // })


            // console.log(ele)
            // 设置默认时地址选择器的初始值
            // pid代表选中的省份 cid表示选中的城市 aid表示选中的区县
            // <address-select info="1" pid="5" cid="358" aid="2792"></address-select>
            scope.initPId = attrs.pid
            scope.initCId = attrs.cid
            scope.initAId = attrs.aid
        }
    }
}])
module.exports = addressSelect
