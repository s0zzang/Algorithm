function solution(s) {
    return s.toLowerCase().split(' ').map((word) => [...word].map((v, i) => i === 0 ? v.toUpperCase() : v).join('')).join(' ')
}