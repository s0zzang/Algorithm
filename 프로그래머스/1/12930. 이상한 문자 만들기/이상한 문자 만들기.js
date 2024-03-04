function solution(s) {
    return s.split(' ').map(word => [...word].map((t,i) => i%2 ? t.toLowerCase() : t.toUpperCase()).join('')).join(' ')
}