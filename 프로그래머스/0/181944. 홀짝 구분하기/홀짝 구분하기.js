const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    const isOdd = !!(n%2)
    console.log(`${n} is ${isOdd ? 'odd' : 'even'}`)
});