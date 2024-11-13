function solution(numbers) {
    return numbers.reduce((res, cur) => res+cur, 0) / numbers.length
}