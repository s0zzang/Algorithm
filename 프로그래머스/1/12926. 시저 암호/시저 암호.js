function solution(s, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    
    return [...s].map(i => {
        if(i === ' ') return ' '
        const before = alphabet.indexOf(i);
        return alphabet[before + n] 
    }).join('')
}