/**
 * Created by xuyan on 2016/7/21.
 */
angular.module("demo.search.controllers",[])
    .controller("searchWCtrl",function($scope,searchSev){

        searchSev.searchProducts("衣").then(function(data){
           $scope.productList  = data;
            console.log( $scope.productList)
        },function(err){

        },function(notice){

        })
    })
.controller("searchController",
        [
            "$scope",
            "searchWordServ",
            "searchSev"
        ,function(
            $scope,
            searchWordServ,
            searchSev){

        $scope.wd = "";

        $scope.saveWord = function(){
            if($scope.wd !=""){
                searchWordServ.saveSearchWord($scope.wd);
                window.location.href ="app/views/productList.html"
            }
        };

        getWordList();

        function getWordList(){
            $scope.wlist = searchWordServ.getSearchWoldList();
        }

        $scope.removeWd = function(){
            searchWordServ.removeSearchWorld();
            getWordList()
        }

        $scope.doDel = function(i){
            searchWordServ.removeWdById(i);
            getWordList();
        }


}])