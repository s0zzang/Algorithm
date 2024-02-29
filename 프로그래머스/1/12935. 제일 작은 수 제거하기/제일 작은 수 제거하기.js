function solution(arr) {
    const res = arr.filter(item => Math.min(...arr) !== item)
    return res.length ? res : [-1]
}