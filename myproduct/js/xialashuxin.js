var myScroll,searchScroll,
    pullDownEl, pullDownOffset,
    generatedCount = 0;
iscroll();
function iscroll(){
    var page =1;
    loaded();//wr
    function loaded() {
        pullDownEl = document.getElementById('pullDown');
        pullDownOffset = pullDownEl.offsetHeight;
        searchScroll = new iScroll('wrapper1'),{
            checkDOMChanges:true
        };
        myScroll = new iScroll('wrapper', {
            useTransition: true,
            topOffset: pullDownOffset,
            vScrollbar:false,
            checkDOMChanges:true,//
            onRefresh: function () {
                if (pullDownEl.className.match('loading')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                }
            },
            onScrollMove: function () {
                if (this.y > 5 && !pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'flip';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Release to refresh...';
                    this.minScrollY = 0;
                } else if (this.y < 5 && pullDownEl.className.match('flip')) {
                    pullDownEl.className = '';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Pull down to refresh...';
                    this.minScrollY = -pullDownOffset;
                }
            },
            onScrollEnd: function () {
                if (pullDownEl.className.match('flip')) {
                    pullDownEl.className = 'loading';
                    pullDownEl.querySelector('.pullDownLabel').innerHTML = 'Loading...';
                    pullDownAction();	// Execute custom function (ajax call?)
                }
            }
        });
        setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
    }
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);
    function pullDownAction () {
        $.ajax({
            url:"http://datainfo.duapp.com/shopdata/getGoods.php",
            dataType:"jsonp",
            success:function(data){
                var handle = $("#contentUl .test").eq(0);
                for(var i=0;i<data.length;i++){
                    handle.find(".discount").text(data[i]["discount"]+"折");
                    handle.find(".left img").prop("src",data[i]["goodsListImg"]);
                    handle.find(".right a").text(data[i]["goodsName"]);
                    data[i]["discount"]==0?data[i]["discount"]=1:null;
                    handle.find(".right del").text("$"+data[i]["price"]);
                    handle.find(".right .price").text("$"+data[i]["price"]*data[i]["discount"]/10);
                    handle.clone().appendTo("ul").removeClass("hidden").addClass("item");
                }
                myScroll.refresh();
            },
            error:function(err){
                alert(err)
            }
        })
    }
}
