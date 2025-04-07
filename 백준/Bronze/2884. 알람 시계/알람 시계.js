const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[0];

const setAlarm = (input) => {
  const [hour, minute] = input.split(" ").map((n) => +n);
  const changedMinute = minute - 45;
  if (minute >= 45) console.log(hour, changedMinute);
  else console.log(hour ? hour - 1 : 23, changedMinute + 60);
};

setAlarm(input);
