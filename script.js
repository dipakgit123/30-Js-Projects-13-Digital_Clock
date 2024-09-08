let hrs = document.getElementById("hrs");
let mins = document.getElementById("min");
let sec = document.getElementById("sec")



setInterval(()=>{
    let currentTime = new Date();
    
let hours = currentTime.getHours();
let Min = currentTime.getMinutes();
let Sec = currentTime.getSeconds();
    hrs.innerHTML = (hours<10?"0":"")+hours;
    mins.innerHTML = (Min<10?"0":"")+Min;
    sec.innerHTML = (Sec<10?"0":"")+Sec;
},1000)
