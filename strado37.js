const hourElement=document.getElementById('hour');
const minuteElement=document.getElementById('minute');
const secondElement=document.getElementById('second');
//Buttons
const startButton=document.getElementById('start');
const pauseButton=document.getElementById('pause');
const restartButton=document.getElementById('restart');

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', stopTimer );
restartButton.addEventListener('click', restartTimer );

let hour=0,
    minute=0,
    second=0,
    interval;

function startTimer() {
    clearInterval(interval);
    interval=setInterval(updateTimer, 1000); 
}
    
function updateTimer() {
    
    // start = setInterval (()=> {
    secondElement.textContent = second;
    minuteElement.textContent = minute;
    hourElement.textContent = hour;
    // })
    second++;

    if(second===60){
        second=0;
        minute++;
    }
    
    if (minute===60) {
        minute=0;
        hour++;
    }
    
}

function stopTimer () {
    clearInterval(interval);
}  

function restartTimer () {
    hour=0;
    minute=0;
    second=0;
    secondElement.textContent = second;
    minuteElement.textContent = minute;
    hourElement.textContent = hour;
    startTimer();
}
    
    
    
    
    
    second++
    if(second<9) {
        secondElement.innerText ='0' + second
    }
    if(second>9) {
        secondElement.innerText = second
    }

    if (second>59) {
        minute++
        secondElement.innerText = "0" + minute
        second = 0
        secondElement.innerText = "0" + second
    }

   
