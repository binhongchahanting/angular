/**
 * Created by xuyan on 2016/7/21.
 */
angular.module("demo.search.services",[])
.service("searchWordServ",["$http","$q",
    function($http,$q){

        /**
         * 保存关键字到localstorage
         * @param 关键字
         */
        this.saveSearchWord = function(w){
            //从localstorage取出ds的值
            var oldval=window.localStorage.getItem("ds");

            if(oldval != null){
                oldval += "|" + w;
            }else{
                oldval = w;
            }
            window.localStorage.setItem("ds",oldval);

        }

        /**
         * 获取关键字列表
         */
        this.getSearchWoldList = function(){
            var list = window.localStorage.getItem("ds");
            if(list !=null){
                return list.split("|");
            }

        }

        /**
         * 删除所有记录
         */
        this.removeSearchWorld = function(){
            window.localStorage.clear();
        }


        /**
         * 根据下标删除localstorage
         * @param i
         */
        this.removeWdById = function(i){

            //
            var list = window.localStorage.getItem("ds");
            var arr = [];
            if(list !=null){
                arr = list.split("|");
            };
            var str = "";
            console.log(arr[i]);
            var saw= arr.splice(i-1,1).join("|");
            window.localStorage.setItem("ds",saw);

        }

}])
.service("searchSev",["$http","$q",function($http,$q){

    var url = "http://datainfo.duapp.com/shopdata/selectGoodes.php?callback=JSON_CALLBACK&selectText="
    /**
     * 通过关键字查询商品列表
     * @param w
     */
    this.searchProducts =function(w){
        var defered =$q.defer();
        $http({
            url:url+w,
            method:"JSONP"
        }).success(function(data){
            defered.resolve(data);
        }).error(function(error){
            defered.reject(error);
        });

        return defered.promise;

    }

}])