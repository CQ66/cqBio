/**
 * Created by Administrator on 2017/5/9.
 */
$(function(){
    var a=0;
    $(".middbox").find("img").each(function(i){
        var that=$(this);
        setTimeout(function(){
            that.show().addClass("animated fadeInUp");
        },400*(i+1))
    });
    $(".middbox").find("div").each(function(i){
        var that=$(this);
        setTimeout(function(){
            that.show().addClass("animated fadeInUp");
        },400*(i+1))
    });
    $(".middbox").css({height:$(window).height()})
})