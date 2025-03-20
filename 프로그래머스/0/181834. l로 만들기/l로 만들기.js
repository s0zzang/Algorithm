function solution(myString) {
    const target = 'l'.charCodeAt();
    return [...myString].map(s => s.charCodeAt() > target ? s : 'l').join('')
}