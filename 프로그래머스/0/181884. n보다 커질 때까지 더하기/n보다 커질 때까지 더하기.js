function solution(numbers, n) {
    return numbers.reduce((a,c) => {
        if(a <= n) return a + c
        return a
    }, 0)
}