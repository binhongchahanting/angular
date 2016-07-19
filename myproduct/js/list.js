$(function(){
    var _height=$(window).height()-150;
    $(".main").css({
        height:_height,
        width:"100%",
    });
    var size=0;
    var start=0;
    $.ajax({
        url:"http://datainfo.duapp.com/shopdata/getclass.php",
        success:function(_data){
            var data=window.eval(_data);
            for(var i=0;i<data.length;i++){
                var name=data[i]["className"];
                var _href="http://localhost:63342/webStudent/myproduct/product.html?n="+data[i]["classID"];
                $("._all div:nth-child(1) a").html(name);
                $("._all div:nth-child(1) a").attr("href",_href);
                $("._all div:nth-child(1)").clone().removeClass("hid").appendTo("._all");
            }
            var myScroll;
                myScroll = new iScroll('wrapper');
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        }
    });
});

