var hours = document.getElementById('hours');
var minuts = document.getElementById('minuts');
var seconds = document.getElementById('seconds');

var startBtn = document.getElementById('s');
var pauseBtn = document.getElementById('p');
var resetBtn = document.getElementById('r');

interval = null;

startBtn.disabled =true;
pauseBtn.disabled =true;
resetBtn.disabled =true;

  
function timer() {
   

    if (!hours.value == '' || !minuts.value == '' || !seconds.value == '') {


        interval = setInterval(() => {

            if (minuts.value >= 1 && seconds.value == 0 || seconds.value == '') {

                minuts.value = minuts.value - 1
                seconds.value = 60;
                if (hours.value > 1 && minuts.value >= 0 || minuts.value == 0 || minuts.value == '' || seconds.value == 0) {
                    hours.value = hours.value - 1
                    minuts.value = 00;

                    if (hours.value >= 1 || hours.value == 0) {
                        minuts.value = 60
                        minuts.value = minuts.value - 1
                    }
                }
            }

            //    }
            if (seconds.value > 0) {
                seconds.value--
                console.log();
                if (minuts.value > 0) {
                    minuts.value - 1
                }
            }
            if(hours.value < 0 ){
                hours.value = 0
            }
            

            

        }, 1000);

    }
}

function start() {
    



    if(hours.value == ''|| minuts.value == ''||seconds.value == ''){
        alert("all fields are required")
        startBtn.disabled = true;
        
    }else{
        startBtn.disabled = true;
        startBtn.setAttribute("style",'color: #cccccc5b')
        pauseBtn.disabled = false;
        pauseBtn.setAttribute("style",'color: #cccccc')
        resetBtn.disabled = true
        resetBtn.setAttribute("style",'color: #cccccc5b')
        timer();
    }
   
}
function pause() {
    pauseBtn.disabled = true;
    pauseBtn.setAttribute("style",'color: #cccccc5b')
    startBtn.disabled=false;
    startBtn.setAttribute("style",'color: #cccccc')
    resetBtn.disabled=false;
    resetBtn.setAttribute("style",'color: #cccccc')

    clearInterval(interval)
}
function reset() {
    pause();

    hours.value = 'Hours';
    minuts.value ='Minuts'
    seconds.value = 'Seconds'

    pauseBtn.disabled=true;
    resetBtn.disabled=true;
    pauseBtn.setAttribute("style",'color: #cccccc5b')
    resetBtn.setAttribute("style",'color: #cccccc5b')

}

function restrict1(element) {
    if (element.value > 60) {
        hours.value = 0 + '0';
    
    }
      if(!element.value == ''){
        startBtn.disabled =false;
    }
  
}
function restrict2(element) {
    if (element.value > 60) {
        minuts.value = 0 + '0';
     
    }
    if(!element.value == ''){
        startBtn.disabled =false;
    }

}
function restrict3(element) {
    if (element.value > 60) {
        seconds.value = 0 + '0';
     
    }
    if(!element.value == ''){
        startBtn.disabled =false;
    }
   
}
