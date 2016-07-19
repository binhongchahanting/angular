$(function(){
   $("._btn").on("tap",function(){
      sessionStorage.removeItem("state");
   });
    $(".gogo").on("tap",function(){
        window.history.go(-1);
    })
});