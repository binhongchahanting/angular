/*
$(function(){
    $(".icon-sousuo").on("tap",function(){
        var context=encodeURI($(this).siblings("input").val());
        if(context){
            window.location.href="http://localhost:63342/webStudent/myproduct/product.html?k="+context;
        }
    })
});
,{
 onScrollEnd:function(){
 var height=0;
 var length=$(".total").length;
 for(var i=1;i<length;i++){
 height+=$(".total").eq(i).height();
 }
 console.log(height+"子元素高度");
 var p_height=$("#scroller").height();
 console.log(p_height+"父元素高度");
 if(p_height>=height){
 $.ajax({
 url:"http://datainfo.duapp.com/shopdata/getGoods.php",
 data:{"classID":_index,"pageCode":0},
 dataType:"jsonp",
 success:function(data) {
 console.log(data);
 if (data) {
 for (var i = 0; i < data.length; i++) {
 $("#scroller .total:nth-child(1) .p_href").attr("href", "http://localhost:63342/webStudent/myproduct/xingqing.html?n=" + data[i]["classID"] + "&" + data[i]["goodsID"]);
 $("#scroller .total:nth-child(1) .p_img").attr("src", data[i]["goodsListImg"]);
 $("#scroller .total:nth-child(1) .describe").html(data[i]["goodsName"]);
 $("#scroller .total:nth-child(1) .price").html("￥" + data[i]["price"]);
 $("#scroller .total:nth-child(1) .discount").html(data[i]["discount"] + "折");
 $("#scroller .total:nth-child(1) ._pre").html("￥" + (Number(data[i]["price"]) / (Number(data[i]["discount"] == 0 ? 10 : Number(data[i]["discount"])) * 0.1)).toFixed(2));
 $("#scroller .total:nth-child(1)").clone().removeClass("hid").appendTo("#scroller");
 }
 setTimeout(function(data){
 var myScroll;
 myScroll = new iScroll('wrapper');
 document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
 },300)
 }
 }
 })
 }
 }
 }
$(function() {
 var _height = $(window).height() - 150;
 $("#wrapper").css({
  height: _height,
  width: "100%"
 });
 var _href = window.location.href;
 var _index = _href.match(/n=.+/g);
 var _index2 = _href.match(/k=.+/g);
 if (_index) {
  _index = _index[0].replace(/n=/, "");
  $.ajax({
   url: "http://datainfo.duapp.com/shopdata/getGoods.php",
   data: {"classID": _index, "linenumber": 15},
   dataType: "jsonp",
   success: function (data) {
    console.log(data);
    if (data) {
     for (var i = 0; i < data.length; i++) {
      $("#scroller .total:nth-child(1) .p_href").attr("href", "http://localhost:63342/webStudent/myproduct/xingqing.html?n=" + data[i]["classID"] + "&" + data[i]["goodsID"]);
      $("#scroller .total:nth-child(1) .p_img").attr("src", data[i]["goodsListImg"]);
      $("#scroller .total:nth-child(1) .describe").html(data[i]["goodsName"]);
      $("#scroller .total:nth-child(1) .price").html("￥" + data[i]["price"]);
      $("#scroller .total:nth-child(1) .discount").html(data[i]["discount"] + "折");
      $("#scroller .total:nth-child(1) ._pre").html("￥" + (Number(data[i]["price"]) / (Number(data[i]["discount"] == 0 ? 10 : Number(data[i]["discount"])) * 0.1)).toFixed(2));
      $("#scroller .total:nth-child(1)").clone().removeClass("hid").appendTo("#scroller");
     }
     $("#scroller").delegate(".icon", "tap", function () {
      var _href = $(this).parent(".thing").parent(".text").siblings("._left").find("a").attr("href");
      var _index = _href.match(/&.+/g)[0].replace("&", "");
      if (sessionStorage.getItem("state")) {
       $.ajax({
        url: "http://datainfo.duapp.com/shopdata/updatecar.php",
        "data": {"userID": sessionStorage.getItem("state"), "goodsID": _index, "number": 1},
        success: function (data) {
         if (data) {
          console.log("成功");
         }
        }
       });
      }
     });
     setTimeout(function () {
      var myScroll;
      myScroll = new iScroll('wrapper');
      document.addEventListener('touchmove', function (e) {
       e.preventDefault();
      }, false);
     }, 2000);
    } else {
     $("#scroller").html("<p class=\"p_p\">对不起，没有您想要的商品~</p>")
    }
   }
  });
 }

});
if (_index2) {
 _index2 = decodeURI(_index2[0].replace(/k=/, ""));
 $.ajax({
  url: "http://datainfo.duapp.com/shopdata/selectGoodes.php",
  data: {"selectText": _index2},
  dataType: "jsonp",
  success: function (data) {
   console.log(data);
   if (data) {
    for (var i = 0; i < data.length; i++) {
     for (var i = 0; i < data.length; i++) {
      $("#scroller .total:nth-child(1) .p_href").attr("href", "http://localhost:63342/webStudent/myproduct/xingqing.html?n=" + data[i]["classID"] + "&" + data[i]["goodsID"]);
      $("#scroller .total:nth-child(1) .p_img").attr("src", data[i]["goodsListImg"]);
      $("#scroller .total:nth-child(1) .describe").html(data[i]["goodsName"]);
      $("#scroller .total:nth-child(1) .price").html("￥" + data[i]["price"]);
      $("#scroller .total:nth-child(1) .discount").html(data[i]["discount"] + "折");
      $("#scroller .total:nth-child(1) ._pre").html("￥" + (Number(data[i]["price"]) / (Number(data[i]["discount"] == 0 ? 10 : Number(data[i]["discount"])) * 0.1)).toFixed(2));
      $("#scroller .total:nth-child(1)").clone().removeClass("hid").appendTo("#scroller");
     }
     $("#scroller").delegate(".icon", "tap", function () {
      var _href = $(this).parent(".thing").parent(".text").siblings("._left").find("a").attr("href");
      var _index = _href.match(/&.+/g)[0].replace("&", "");
      if (sessionStorage.getItem("state")) {
       $.ajax({
        url: "http://datainfo.duapp.com/shopdata/updatecar.php",
        "data": {"userID": sessionStorage.getItem("state"), "goodsID": _index, "number": 1},
        success: function (data) {
         if (data) {
          console.log("成功");
         }
        }
       });
      }
     });
     setTimeout(function () {
      var myScroll;
      myScroll = new iScroll('wrapper');
      document.addEventListener('touchmove', function (e) {
       e.preventDefault();
      }, false);
     }, 2000);
    }
    setTimeout(loaded,1000);
   } else {
    $("#scroller").html("<p class=\"p_p\">对不起，没有您想要的商品~</p>")
   }

  }
 })
}


*/
