/**
 * Created by xuyan on 2016/7/20.
 */
angular.module("demo.shop.services",[])
   .service("cartService",function(){

       this.getList = function(){

           //mock
           var jdata = [
               {
                   "title":"休闲零食膨化食品19.9包邮礼包",
                   "price":666,
                   "quality":1,
                   "pic":"assets/77f4.jpg"
               },
               {
                   "title":"UYUK九分裤 男2016夏装 男士新款小脚",
                   "price":888,
                   "quality":1,
                   "pic":"assets/a13.jpg"
               },
               {
                   "title":"厚生记休闲零食大礼包礼盒 满",
                   "price":222,
                   "quality":1,
                   "pic":"assets/e2.jpg"
               }
           ]


           return jdata;
       }


})