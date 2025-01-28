function solution(s) {
    const lastSeen = {}
    
    return [...s].map((s,i) => {
        const pointer = lastSeen[s] !== undefined ? i-lastSeen[s] : -1;
        lastSeen[s] = i
        return pointer
    })
}