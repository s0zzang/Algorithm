function solution(x) {
    const result = (x + '').split('').reduce((acc,cur) => acc + +cur, 0)
    return x % result ? false : true
}