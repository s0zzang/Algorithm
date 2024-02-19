function solution(arr, divisor) {
    let res = arr.filter(i => i % divisor === 0)
    res.length ? res.sort((a,b) => a-b) : res.push(-1)
    return res
}