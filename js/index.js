var n=1;
initStatus(n);
var timer=setInterval(function(e){
    makeLeaveStatus(getImageItem(n))
    .one("transitionend",function(e){
        makeEnterStatus($(e.currentTarget));
    });
    makeCurrentStatus(getImageItem(n+1));
    n+=1;
    n=changeN(n);
},3000)

document.addEventListener("visibilitychange",function(e){
   if(document.hidden){
      clearInterval(timer);
   }else{
    timer=setInterval(function(e){
        makeLeaveStatus(getImageItem(n))
        .one("transitionend",function(e){
            makeEnterStatus($(e.currentTarget));
        });
        makeCurrentStatus(getImageItem(n+1));
        n+=1;
        n=changeN(n);
    },3000)
   }
});

function initStatus(n){
    getImageItem(n).addClass("current")
    .siblings().add("enter");
}
function changeN(n){
    var max=$(".images>img").length;
    return n%max===0?max:n%max;
}
function makeCurrentStatus($node){
    $node.removeClass("leave enter").addClass("current");
    return $node;
}
function makeLeaveStatus($node){
    $node.removeClass("enter current").addClass("leave");
    return $node;
 }
 function makeEnterStatus($node){
    $node.removeClass("current leave").addClass("enter");
    return $node;
 }
 function getImageItem(n){
     n=changeN(n);
     return $(".images>img:nth-child("+n+")");
 }


