const Hours = document.getElementById('Hours');
const Minutes = document.getElementById('Minutes');
const Seconds = document.getElementById('Seconds');

const Clock = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let s = dateToday.getSeconds();

  if (hr < 10) hr = '0' + hr;
  if (min < 10) min = '0' + min;
  if (s < 10) s = '0' + s;

  Hours.textContent = hr;
  Minutes.textContent = min;
  Seconds.textContent = s;
})