const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
    for(let i=0; i<line.length; i++) console.log(line[i])
}).on('close',function(){
    str = input[0];
});