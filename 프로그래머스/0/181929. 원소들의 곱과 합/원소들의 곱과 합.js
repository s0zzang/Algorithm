function solution(num_list) {
    const sum = num_list.reduce((a,b) => a+b, 0)
    const multiply = num_list.reduce((a,b) => a*b, 1)
    return Math.pow(sum, 2) > multiply ? 1 : 0
}