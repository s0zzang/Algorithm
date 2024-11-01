function solution(age) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    return [...String(age)].reduce((acc, cur) => acc + arr[cur], '')
}