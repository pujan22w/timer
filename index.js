let timerDisplay= document.querySelector('.timer');
let start= document.querySelector('.start');
let stop= document.querySelector('.stop');
let reset = document.querySelector('.reset');

let msec= 0;
let secs = 0;
let mins = 0; 

let timerId= null;


start.addEventListener("click",function(){
    if(timerId!== null){
      clearInterval(timerId);// it will clears or stop a timer set with setinterval method
    }
    // myinterval= setInterval(function,millisecond);
  timerId =  setInterval( startTimer,10); 
});

stop.addEventListener("click", function(){
    clearInterval(timerId);
});

reset.addEventListener("click",function(){
    clearInterval(timerId);
    timerDisplay.innerHTML=`00:00:00`;
    mins = secs = msec =0;

});

function startTimer(){
    msec++;
    if (msec == 100){
       msec=0;
        secs++;
        if(secs == 60){
           secs=0;
            mins++;
        }
    }
      let msecString = msec < 10 ? `0${msec}` : msec;
      let secsString = secs < 10 ? `0${secs}` : secs;
      let minsString = mins < 10 ? `0${mins}` : mins;

      timerDisplay.innerHTML=`${minsString} : ${secsString} : ${msecString}`;
}