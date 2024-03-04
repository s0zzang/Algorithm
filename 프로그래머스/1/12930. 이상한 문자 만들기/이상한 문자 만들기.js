function solution(s) {
    const arr = s.split(' ').map(word => [...word].map((t,i) => i%2 ? t.toLowerCase() : t.toUpperCase()) )
    return arr.join(' ').replaceAll(',','')
}