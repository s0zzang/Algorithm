function solution(my_string) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lower = "abcdefghijklmnopqrstuvwxyz"
    return [...my_string].map(s => {
        const idx = Math.max(upper.indexOf(s), lower.indexOf(s))
        return upper.includes(s) ? lower[idx] : upper[idx]
    }).join('')
}