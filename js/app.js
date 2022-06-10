"use strict";

const timer = document.getElementById("timer");

function resetTime() {
  window.localStorage.setItem("time", Date.now());
  timer.innerHTML = "0 seconds";
  console.log("Reset!");
  clearInterval(t);
  t = setInterval(updatePage, 1000);
}

function getTime() {
  return "1654621199171";
  // return window.localStorage.getItem("time");
}

function updatePage() {
  timer.innerHTML = secondsToTime(Math.trunc((Date.now() - getTime()) / 1000));
}

function secondsToTime(seconds) {
  const s = seconds % 60;
  const m = Math.floor(seconds / 60) % 60;
  const h = Math.floor(seconds / 60 / 60) % 24;
  const d = Math.floor(seconds / 60 / 60 / 24) % 7;
  const w = Math.floor(seconds / 60 / 60 / 24 / 7);

  return `${w > 0 ? (w === 1 ? w + " week" : w + " weken") : ""}${
    d > 0 ? (d === 1 ? d + " dag" : d + " dagen") : ""
  }${h > 0 ? " " + h + " uren" : ""}${m > 0 ? " " + m + " minuten" : ""}${
    s > 0 ? " " + s + " seconden" : ""
  }`;
}

const btn = document.getElementById("reset");
let t = setInterval(updatePage, 1000);

btn.onclick = resetTime;
