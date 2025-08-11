/* More info https://www.w3schools.com/jsref/jsref_tolocalestring.asp */

const getCurrentTime = () => {
 // Set the timezone
  const options = {
    timeZone: 'Asia/Seoul',
    hour12: false, 
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  
  // Get the current time
  const currentTime = new Date().toLocaleString('ko-KR', options).replace('요일', '요일<br>');

  // Render
  document.querySelector(".clock").innerHTML = currentTime;
  document.querySelector("h1").innerHTML = "서울";
  
  // Repeat
  setTimeout(getCurrentTime, 1000);
}
