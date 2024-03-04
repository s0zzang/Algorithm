function solution(sizes) {
    const arr = sizes.map(t => t[0] < t[1] ? t.reverse() : t)
    const idx0 = Math.max(...arr.map(t => t[0]))
    const idx1 = Math.max(...arr.map(t => t[1]))
    return idx0 * idx1
}