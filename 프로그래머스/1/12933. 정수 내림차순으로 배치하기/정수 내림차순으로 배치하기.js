function solution(n) {
    const arr = [...`${n}`];
    return +(arr.sort((a,b) => b-a).reduce((acc, cur) => acc + +cur, ''))
}