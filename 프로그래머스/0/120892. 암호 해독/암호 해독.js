function solution(cipher, code) {
    return [...cipher].filter((item, idx) => (idx+1) % code === 0).join('')
}