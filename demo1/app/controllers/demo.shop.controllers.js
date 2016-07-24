/**
 * Created by xuyan on 2016/7/20.
 */

angular.module("demo.shop.controllers",[])
 .controller("cartController",["$scope","cartService",function($s,cartService){

     $s.cartList = cartService.getList();

     _countCartPrice();


      function _countCartPrice(){
         $s.totalQul = 0;
         $s.totalMoney =0;

         angular.forEach($s.cartList,function(v){
             $s.totalQul += v.quality;
             $s.totalMoney += v.quality * v.price;
         })
     }



     $s.addQuq = function(i){
         $s.cartList[i].quality = $s.cartList[i].quality+1;
         _countCartPrice();
     }

     $s.subQuq = function(i){
         $s.cartList[i].quality = $s.cartList[i].quality-1;
         _countCartPrice();
     }

     $s.remCart = function(i){
         $s.cartList.pop($s.cartList[i])
         _countCartPrice();
     }

}])