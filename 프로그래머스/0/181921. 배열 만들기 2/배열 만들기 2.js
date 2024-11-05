function solution(l, r) {
    const answer = [];
    for(let i=l; i<=r; i++){
        if(String(i).split('').every(n => n === '5' || n === '0')) answer.push(i)
    }
    return answer.length ? answer : [-1]
}