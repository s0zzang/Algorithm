function solution(a, b) {
    return `${a}${b}` < `${b}${a}` ? +`${b}${a}` : +`${a}${b}`
}