function solution(rny_string) {
    return [...rny_string].map(s => s === 'm' ? 'rn' : s).join('')
}