const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let sugar = +input;
let needBags = 0;

while (sugar > 0) {
  if (sugar < 5) {
    if (sugar % 3) console.log(-1);
    else console.log(needBags + 1);
    break;
  } else if (sugar % 5) {
    sugar -= 3;
    needBags += 1;
  } else {
    needBags += sugar / 5;
    console.log(needBags);
    break;
  }
}
