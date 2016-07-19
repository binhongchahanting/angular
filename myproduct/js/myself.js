$(function(){
    if(sessionStorage.getItem("state")){
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getuser.php",
            data:{"userID":sessionStorage.getItem("state")},
            dataType:"jsonp",
            success:function(data){
                console.log(data);
               /* $(".icon img").attr("src",data[0]["userimg_url"]);*/
                $(".title").html(data[0]["userID"]);
            }
        });
    }
});
