function solution(n) {
    let result = Math.sqrt(n)
    return result % 1 ? -1 : (result+1) ** 2
}