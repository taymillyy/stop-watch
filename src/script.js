let display = document.querySelector("#display");
let timer = null;
let startTime = 0;
let elaspedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        isRunning = true;
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update, 10);
        
    }
}

function stop(){
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
        
    }
}

function reset(){
   clearInterval(timer);
    elaspedTime = 0;
    display.innerHTML = "00 : 00 : 00 : 00";
    isRunning = false;
    startTime = 0;
   
}

function update(){
 let currentTime = Date.now();
 elaspedTime = currentTime - startTime;   

 let hours = Math.floor(elaspedTime / (1000*60*60));
 let minutes = Math.floor(elaspedTime / (1000*60) % 60);
 let seconds = Math.floor(elaspedTime / 1000 % 60);
 let milliseconds = Math.floor(elaspedTime % 1000 /10);

 hours = String(hours).padStart(2, "0");
 minutes = String(minutes).padStart(2, "0");
 seconds = String(seconds).padStart(2, "0");
 milliseconds = String(milliseconds).padStart(2, "0");

 display.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
}