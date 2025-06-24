function solution(myString, pat) {
    const switched = [...myString].map(s => s === 'A' ? 'B' : 'A').join('')
    return switched.includes(pat) ? 1 : 0
}