function solution(age) {
    const arr = 'abcdefghij'
    return [...String(age)].reduce((acc, cur) => acc + arr[cur], '')
}