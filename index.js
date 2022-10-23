const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

const getTime = () =>{
  let now = new Date()
  
  let s = now.getSeconds();
  let m = now.getMinutes();
  let h = now.getHours();
  
  let timeInterval = 6;

  secondsHand.style.transform = 'rotate(' + s * timeInterval + 'deg)'
  minutesHand.style.transform = 'rotate(' + (m * timeInterval + s / 10) + 'deg)'
  hoursHand.style.transform = 'rotate(' + (h * 30 + m / 2) + 'deg)'
}

setInterval(getTime, 500);
