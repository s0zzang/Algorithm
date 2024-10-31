function solution(n) {
    return [...Array(n*3)].map((_,i) => i+1).filter(num => num%3 && !String(num).includes('3'))[n-1]
}