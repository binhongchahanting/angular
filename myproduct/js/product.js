$(function(){
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
                if (data){
                    for (var i = 0; i < data.length; i++) {
                        $("#scroller .total:nth-child(1) .p_href").attr("href", "http://localhost:63342/webStudent/myproduct/xingqing.html?n=" + data[i]["classID"] + "&" + data[i]["goodsID"]);
                        $("#scroller .total:nth-child(1) .p_img").attr("src", data[i]["goodsListImg"]);
                        $("#scroller .total:nth-child(1) .describe").html(data[i]["goodsName"]);
                        $("#scroller .total:nth-child(1) .price").html("￥" + data[i]["price"]);
                        $("#scroller .total:nth-child(1) .discount").html(data[i]["discount"] + "折");
                        $("#scroller .total:nth-child(1) ._pre").html("￥" + (Number(data[i]["price"]) / (Number(data[i]["discount"] == 0 ? 10 : Number(data[i]["discount"])) * 0.1)).toFixed(2));
                        $("#scroller .total:nth-child(1)").clone().removeClass("hid").appendTo("#thelist");
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
                    setTimeout(loaded,2000);
                } else {
                    $("#scroller").html("<p class=\"p_p\">对不起，没有您想要的商品~</p>")
                }
            }
        });
    }
    $("._gogo").bind("tap", function () {
        window.history.go(-1);
    })
    var myScroll,
        pullDownEl, pullDownOffset,
        pullUpEl, pullUpOffset,
        generatedCount = 0;
        function loaded() {
            pullUpEl = document.getElementById('pullUp');
            pullUpOffset = pullUpEl.offsetHeight;
            myScroll = new iScroll('wrapper', {
                useTransition: true,
                toOffset:pullUpOffset,
                onRefresh: function () {
                    if (pullUpEl.className.match('loading')) {
                        pullUpEl.className = '';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                    }
                },
                onScrollMove: function () {
                    if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                        pullUpEl.className = 'flip';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Release to refresh...';
                        this.maxScrollY = this.maxScrollY;
                    } else if (this.y > (this.maxScrollY + 15) && pullUpEl.className.match('flip')) {
                        pullUpEl.className = '';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Pull up to load more...';
                        this.maxScrollY = pullUpOffset;
                    }
                },
                onScrollEnd: function () {
                    if (pullUpEl.className.match('flip')) {
                        pullUpEl.className = 'loading';
                        pullUpEl.querySelector('.pullUpLabel').innerHTML = 'Loading...';
                        pullUpAction();	// Execute custom function (ajax call?)
                    }
                }
            });
           /* setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);*/
        }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
     function pullUpAction(){
         setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!
             _index = _index[0]?_index[0].replace(/n=/, ""):_index2[0].replace(/k=/,"");
             $.ajax({
                 url: "http://datainfo.duapp.com/shopdata/getGoods.php",
                 data: {"classID": _index, "linenumber": 15},
                 dataType: "jsonp",
                 success: function (data) {
                     console.log(data);
                     if (data){
                         for(var i = 0; i < data.length; i++) {
                             $("#scroller .total:nth-child(1) .p_href").attr("href", "http://localhost:63342/webStudent/myproduct/xingqing.html?n=" + data[i]["classID"] + "&" + data[i]["goodsID"]);
                             $("#scroller .total:nth-child(1) .p_img").attr("src", data[i]["goodsListImg"]);
                             $("#scroller .total:nth-child(1) .describe").html(data[i]["goodsName"]);
                             $("#scroller .total:nth-child(1) .price").html("￥" + data[i]["price"]);
                             $("#scroller .total:nth-child(1) .discount").html(data[i]["discount"] + "折");
                             $("#scroller .total:nth-child(1) ._pre").html("￥" + (Number(data[i]["price"]) / (Number(data[i]["discount"] == 0 ? 10 : Number(data[i]["discount"])) * 0.1)).toFixed(2));
                             $("#scroller .total:nth-child(1)").clone().removeClass("hid").appendTo("#thelist");
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
                     } else {
                         $("#scroller").html("<p class=\"p_p\">对不起，没有您想要的商品~</p>")
                     }
                 }
             });
             myScroll.refresh();		// Remember to refresh when contents are loaded (ie: on ajax completion)
         }, 1000);
             }
});