const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const result = []
    for(let i=1; i<=input[0]; i++) result.push('*'.repeat(i))
    console.log(result.join('\n'))
});