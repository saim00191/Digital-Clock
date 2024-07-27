"use strict";
function clock() {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
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
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let day = document.getElementById("dd");
    let fullDate = document.getElementById("ddmmyy");
    let period = document.getElementById("ampm");
    let time = new Date();
    let s = time.getSeconds();
    let m = time.getMinutes();
    let h = time.getHours();
    let d = time.getDay();
    let dd = time.getDate();
    let mm = time.getMonth();
    let yy = time.getFullYear();
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
