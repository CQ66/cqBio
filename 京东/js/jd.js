/**
 * Created by Administrator on 2016/8/20.
 */
window.onload = function(){
    var oDivbox = document.getElementById("divbox");
    var oImgbox = document.getElementsByClassName("imgbox")[0];
    var arrImg = oImgbox.getElementsByTagName("img");
    var oBtnbox = document.getElementsByClassName("buttbox")[0];
    var arrLi = oBtnbox.getElementsByTagName("li");
    var oLeft = document.getElementById("left");
    var oRight = document.getElementById("right");
    var oLunbo2 = document.getElementsByClassName("lunbo2")[0];
    var oLb1 = document.getElementsByClassName("lb");
    var oLeft1 = document.getElementById("left1");
    var oRight1 = document.getElementById("right1");
    var arrLi1 = document.getElementsByClassName("li1");
    var arrHide = document.getElementsByClassName("hide");
    var arrP = document.getElementsByTagName("p");
    var oGwc = document.getElementsByClassName("gwc")[0];
    var oHide1 = document.getElementsByClassName("hide1")[0];
    var indexImg = 0;
    var newIndexImg = 0;
    oGwc.onmouseover = function(){
        oHide1.style.display = "block";
    }
    oGwc.onmouseout = function(){
        oHide1.style.display = "none";
    }
    for(var i=0;i<arrLi1.length;i++){
        arrLi1[i].index = i;
        arrLi1[i].onmouseover = function(){
            for(var j=0;j<arrP.length;j++){
                arrP[j].style.color = "white";
            }
            arrP[this.index].style.color = "#c81623";
            for(var j=0;j<arrHide.length;j++){
                arrHide[j].style.display = "none";
            }
            arrHide[this.index].style.display = "block";
            arrHide[this.index].style.top = -1*this.index*31+"px"
        }
        arrLi1[i].onmouseout = function(){
            arrHide[this.index].style.display = "none"
        }
    }
    oLunbo2.onmouseover = function(){
        oLeft1.style.display = "block";
        oRight1.style.display = "block";
    }
    oLunbo2.onmouseout = function(){
        oLeft1.style.display = "none";
        oRight1.style.display = "none";
    };
    var newId = 0;
    oLeft1.onclick = function(){
        newIndexImg--;
        if(newIndexImg == -1){
            newIndexImg = 2;
        }
        for(var j=0;j<oLb1.length;j++) {
            oLb1[j].style.display = "none";
            oLb1[j].style.left = 1000+"px";
        }
        oLb1[newIndexImg].style.display = "block";
        var left = oLb1[newIndexImg].offsetLeft;
        if(!newId){
            newId = setInterval(function(){
                var a = oLb1[newIndexImg].offsetLeft - 10;
                if(a < 210){
                    clearInterval(newId);
                    newId = 0;
                }
                else {
                    oLb1[newIndexImg].style.left = a + "px";
                }
            },3)
        }
    }
    oRight1.onclick = function(){
        newIndexImg++;
        if(newIndexImg == 3){
            newIndexImg = 0;
        }
        for(var j=0;j<oLb1.length;j++) {
            oLb1[j].style.display = "none";
        }
        oLb1[newIndexImg].style.display = "block";
    }
    oDivbox.onmouseover = function(){
        oLeft.style.display = "block";
        oRight.style.display = "block";
        clearInterval(id);
        id = 0;
    }
    oDivbox.onmouseout = function(){
        oLeft.style.display = "none";
        oRight.style.display = "none";
        if(!id){
            id = setInterval(next,3000);
        }
    }
    for(var i=0;i<arrLi.length;i++){
        arrLi[i].index = i;
        arrLi[i].onmouseover = function(){
            for(var j=0;j<arrLi.length;j++){
                arrLi[j].style.backgroundColor = "#333";
            }
            this.style.backgroundColor = "#ff6000";
            for(var j=0;j<arrImg.length;j++) {
                arrImg[j].style.display = "none";
            }
            arrImg[this.index].style.display = "block";
            indexImg = this.index;
        }
    }
    oLeft.onclick = function(){
        indexImg--;
        if(indexImg == -1){
            indexImg = 3;
        }
        for(var j=0;j<arrLi.length;j++){
            arrLi[j].style.backgroundColor = "#333";
        }
        arrLi[indexImg].style.backgroundColor = "#ff6000";
        for(var j=0;j<arrImg.length;j++) {
            arrImg[j].style.display = "none";
        }
        arrImg[indexImg].style.display = "block";
    }
    function next(){
        indexImg++;
        if(indexImg == 4){
            indexImg = 0;
        }
        for(var j=0;j<arrLi.length;j++){
            arrLi[j].style.backgroundColor = "#333";
        }
        arrLi[indexImg].style.backgroundColor = "#ff6000";
        for(var j=0;j<arrImg.length;j++) {
            arrImg[j].style.display = "none";
        }
        arrImg[indexImg].style.display = "block";
    }
    oRight.onclick = next;
   
}