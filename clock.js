 function updateTime(){
    const time = new Date();
    const secondsRatio = time.getSeconds()/60;
    const secondsRotation = secondsRatio*360;
     
    const minutesRatio = (time.getMinutes() + secondsRatio)/60 ;
    const minutesRotation = minutesRatio * 360;

    const hourRotation = (minutesRatio + time.getHours())/12 * 360;

    rotateHand(hourHand,hourRotation);
    rotateHand(minutesHand,minutesRotation);
    rotateHand(secondsHand,secondsRotation);
}
const rotateHand = (element,rotation)=> element.style.transform = `translateX(-50%) rotate(${rotation}deg)`;
const hourHand = document.querySelector('div[data-hour]');
const minutesHand = document.querySelector('div[data-minutes]');
const secondsHand = document.querySelector('div[data-seconds]');
setInterval(updateTime,1000);
document.addEventListener('DOMContentLoaded',updateTime);