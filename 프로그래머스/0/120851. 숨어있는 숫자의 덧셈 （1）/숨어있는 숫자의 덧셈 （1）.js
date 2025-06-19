function solution(my_string) {
    return [...my_string].map(Number).reduce((a,c) => isNaN(c) ? a : a+c, 0)
}