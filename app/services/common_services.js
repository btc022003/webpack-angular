/**
 * [定义一个服务]
 * @param  {[type]} $http [description]
 * @param  {[type]} $q    [description]
 * @return {[type]}       [description]
 */
module.exports = function($http,$q){
  var services = {}
  var base_url = 'http://lixuanqi.com/api/v1/address/get_data.json'

  services.getAddress = function(type,fid){
    var url = base_url
    if(type){
      url += '?tag='+type+'&fid='+fid
    }
    var deferred = $q.defer()
    $http({
      method:'get',
      url:url,
      // data:data
    }).success(function(res){
      deferred.resolve(res)
    }).error(function(err){
      deferred.reject(err)
    })
    return deferred.promise
  }
  return services
}
