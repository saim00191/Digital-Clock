function clock() {
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let hours: any = document.getElementById("hours");
  let minutes: any = document.getElementById("minutes");
  let seconds: any = document.getElementById("seconds");
  let day: any = document.getElementById("dd");
  let fullDate: any = document.getElementById("ddmmyy");
  let period: any = document.getElementById("ampm");

  let time = new Date();

  let s: any = time.getSeconds();
  let m: any = time.getMinutes();
  let h: any = time.getHours();
  let d: any = time.getDay();
  let dd: any = time.getDate();
  let mm: any = time.getMonth();
  let yy: any = time.getFullYear();
  let ampm = h < 12 ? "AM" : "PM";

  if (h < 10) {
    h = "0" + h;
  }
  if (h > 12) {
    h = h - 12;
  }
  if (h == 0) {
    h = 12;
  }
  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h < 10) {
    h = "0" + h;
  }
  period.innerHTML = ampm;
  fullDate.innerHTML = `${dd} - ${months[mm]} - ${yy}`;
  day.innerHTML = days[d];
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
setInterval(clock, 1000);
