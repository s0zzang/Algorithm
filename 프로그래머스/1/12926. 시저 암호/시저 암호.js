function solution(s, n) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const edge = upper.length
    
    return [...s].map(i => {
        if(i === ' ') return ' '
        if(upper.indexOf(i) > -1){
            const before = upper.indexOf(i);
            return upper[before + n] || upper[before + n - edge]
        } else {
            const before = lower.indexOf(i);
            return lower[before + n] || lower[before + n - edge]
        }
        
    }).join('')
}