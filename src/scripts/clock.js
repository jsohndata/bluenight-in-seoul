
const getCurrentTime = () => {
  // Get new instance of the current date
  const today = new Date();

  // Convert
  let day = today.getDay();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let millisecond = today.getMilliseconds();

  const dayArray = [
    "Sun", "Mon", "Tue","Wed", "Thr", "Fri", "Sat"
  ];  

  // Check Leading Zero
  hour = checkLeadingZero(hour);
  minute = checkLeadingZero(minute);
  second = checkLeadingZero(second);

  // Assemble
  let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${millisecond}`;

  // Render
  document.querySelector(".clock").innerHTML = currentTime;
  
  setTimeout(getCurrentTime, 1000);
}

const checkLeadingZero = paramTime => {
  paramTime < 10 
    ? paramTime = `0${paramTime}`
    : null

  return paramTime;
}