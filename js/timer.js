function getTime(el){
    let today=new Date();
    let h=today.getHours();
    let m=today.getMinutes();
    m=m>=10?m:('0'+m);
    el.innerHTML = h+":"+m;
    setTimeout(function(){getTime(el)}, 5000);
}
function getDays(el){
    let today=new Date();
    let y=today.getFullYear();
    let m=today.getMonth();
    let d=today.getDate();
    let w=today.getDay();
    m=m+1;
    el.innerHTML = y+"-"+m+"-"+d+" 星期"+w;
    setTimeout(function(){getDays(el)}, 10000);
}

let timer = document.getElementById('timer');
let days = document.getElementById('days');
getTime(timer);
getDays(days);