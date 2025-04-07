const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [time, takenTime] = input;

const setTimer = () => {
  let [hour, minute] = time.split(" ").map((n) => +n);

  minute += +takenTime;
  hour += Math.floor(minute / 60);
  minute = minute % 60;
  hour = hour % 24;

  console.log(hour, minute);
};

setTimer();
