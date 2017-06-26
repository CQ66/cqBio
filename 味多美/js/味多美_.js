/**
 * Created by Administrator on 2016/10/20.
 */
$(function(){
    var id;
    var index=0;
    $(".bj").hover(function(){
        $(".hiddenbox").css({display:"block"})
    },function(){
        $(".hiddenbox").css({display:"none"})
    })
    $(".box").hover(function(){
        clearInterval(id)
        $(".hidd").animate({bottom:"0"});
        $(".dian").animate({bottom:"-35"})
    },function(){
        $(".hidd").animate({bottom:"-64"})
        $(".dian").animate({bottom:"20"})
        id=setInterval(a,2000)
    })
    function a(){
        index++;
        if(index==4){
            index=0
        }
        $(".box ul").stop().animate({left:-1170*index+"px"})
        $(".dian").find("span").eq(index).css({background:"red"}).siblings().css({background:"#3e3e3e"})
    }a()
    id=setInterval(a,2000)
    $(".hidd img").hover(function(){
        index=$(this).index();
        $(".box ul").stop().animate({left:-1170*index+"px"})
    },function(){
        $(".dian").find("span").eq(index).css({background:"red"}).siblings().css({background:"#3e3e3e"})
    })

    $(".q1").hover(function(){

        $(this).parents().find("._Box").find("div").css({opacity:"0.1"})
    },function(){
        $(this).parents().find("._Box").find("div").css({opacity:"0"})
    })
    $(".q2").hover(function(){
        $(this).parents().find(".q3").css({opacity:"0.1"})
        $(this).parents().find(".q4").css({opacity:"0.1"})
        $(this).parents().parents().find(".q1").css({opacity:"0.1"})
    },function(){
        $(this).parents().find(".q3").css({opacity:"0"})
        $(this).parents().find(".q4").css({opacity:"0"})
        $(this).parents().parents().find(".q1").css({opacity:"0"})
    })
    $(".q3").hover(function(){
        $(this).parents().find(".q2").css({opacity:"0.1"})
        $(this).parents().find(".q4").css({opacity:"0.1"})
        $(this).parents().parents().find(".q1").css({opacity:"0.1"})
    },function(){
        $(this).parents().find(".q2").css({opacity:"0"})
        $(this).parents().find(".q4").css({opacity:"0"})
        $(this).parents().parents().find(".q1").css({opacity:"0"})
    })
    $(".q4").hover(function(){
        $(this).parents().find(".q2").css({opacity:"0.1"})
        $(this).parents().find(".q3").css({opacity:"0.1"})
        $(this).parents().parents().find(".q1").css({opacity:"0.1"})
    },function(){
        $(this).parents().find(".q2").css({opacity:"0"})
        $(this).parents().find(".q3").css({opacity:"0"})
        $(this).parents().parents().find(".q1").css({opacity:"0"})
    })
})