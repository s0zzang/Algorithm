function solution(numbers) {
    let res = 0;
    for(let i=0; i<=9; i++) if(numbers.indexOf(i) < 0) res += i
    return res
}