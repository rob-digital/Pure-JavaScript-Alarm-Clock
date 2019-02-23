var alarmSound = new Audio();
alarmSound.src = 'Street_Party.mp3';

var setTo, setHour, setMinute, setSecond;

setTime();

function setTime() {
var rightNow = new Date();
var h = rightNow.getHours();
var m = rightNow.getMinutes();
var s = rightNow.getSeconds();

if (h < 10) {
  h = "0" + h;
}

if (m < 10) {
  m = "0" + m;
}

if (s < 10) {
  s = "0" + s;
}
var time = h + " : "+ m + " : " + s;


    document.querySelector('#line').textContent = time;
//document.getElementById('line').textContent = time;
//document.getElementById('line').innerHTML = rightNow.toLocaleTimeString();

setTimeout(setTime, 1000);


 
var goalHour = (setHour - h);
var goalMin = (setMinute - m);
var goalSec = (setSecond - s);

if(goalHour === 0 && goalMin === 0 && goalSec ===0) {
  alarmSound.play();
  return;
}



}



function alarm() {
    
    
setHour = document.getElementById('setH').value;
setMinute = document.getElementById('setM').value;
setSecond = document.getElementById('setS').value;

    
if ((setHour > 23 || setHour === "") || (setMinute > 59 || setMinute === "") || (setSecond > 59 || setSecond === "")) {
       
  wrong();
  clearAll();
        
    } else {
       
            if (setHour < 10 && setHour.length < 2) {
              setHour = "0" + setHour;
            }

            if (setMinute < 10 && setMinute.length < 2) {
              setMinute = "0" + setMinute;
            }

            if (setSecond < 10 && setSecond.length < 2) {
              setSecond = "0" + setSecond;
            } 
           
        setTo = new Date();
        setTo.setHours(setHour);
        setTo.setMinutes(setMinute);
        setTo.setSeconds(setSecond);
        console.log(setTo);
        
        var allGood = setHour + " : " + setMinute + " : " + setSecond;
        document.getElementById('line2').innerHTML = "Alarm set for: " + allGood;
        
        clearAll();
        
    }
    
}

function clearAll() {
    document.getElementById('setH').value = "";
    document.getElementById('setM').value = "";
    document.getElementById('setS').value = "";
}

function wrong() {
        var wrongMessage = "Alarm set wrongly, please try again";
        document.getElementById('line2').innerHTML = wrongMessage;
    }

function stopAlarm() {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        setTo = "";
        console.log(setTo);
        document.getElementById('line2').innerHTML = "";
}



/*switch(setToString) {
case timeString :
  alert("Eureka!");
}
*/

var granimInstance = new Granim({
    element: '#mainScreen',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});

