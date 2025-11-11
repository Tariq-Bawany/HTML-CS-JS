let clock = document.getElementById("clock");
console.log(clock);
for (let index = 1; index <= 12; index++) {
    clock.innerHTML+= `<span style="--i:${index}"><b>${index}</b></span>`
}
let span = document.getElementsByTagName("span");

// for hr
// 360deg - 12hr ==> 360/12= 30deg (per hr) ==>  h*hr = 30*h
// 30deg - 1h - 60min ==> 30/60 = 1/2deg (per min) ==> m*min = 1/2*m
// hr ==> h*hr + m*min = (30*h + 1/2*m)deg

// for mins
// 360deg - 60min ==> 360/60 = 6deg(per min) ==> m*min = 6*m

// for sec
// 360deg - 60sec ==> 360/60 = 6deg(per sec) ==> s*sec = 6*s

function displayTime() {
    let date = new Date();
    let hr = document.getElementById("hr");
    let min = document.getElementById("min");
    let sec = document.getElementById("sec");
    
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    hr.style.transform = `rotate(${(30*h)+(0.5*m)}deg)` 
    min.style.transform = `rotate(${6*m}deg)` 
    sec.style.transform = `rotate(${6*s}deg)` 

}

setInterval(displayTime,1000)