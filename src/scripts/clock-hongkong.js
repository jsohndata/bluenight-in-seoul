
const getCurrentTime = () => {
  // Get new instance of the current date
 // const today = new Date();

 // Set the timezone
  const options = {
    timeZone: 'Asia/Hong_Kong',
    hour12: false, // Use 24-hour format
    weekday: 'long', // Show the weekday (e.g. Monday)
    month: 'long', // Show the month (e.g. April)
    day: 'numeric', // Show the day (e.g. 12)
    hour: 'numeric', // Show the hour (e.g. 15 for 3 PM)
    minute: 'numeric', // Show the minute (e.g. 30)
    second: 'numeric', // Show the second (e.g. 45)
  };

  // Get the current time
  const today = new Date().toLocaleString('en-US', options);

  // Assemble
  let currentTime = `${today}`;

  // Render
  document.querySelector(".clock").innerHTML = currentTime;
  document.querySelector("h1").innerHTML = "香港";
  
  // Repeat
  setTimeout(getCurrentTime, 1000);
}

const checkLeadingZero = paramTime => {
  paramTime < 10 
    ? paramTime = `0${paramTime}`
    : null

  return paramTime;
}