function solution(s) {
    const map = new Map()
    for(i of s) map.set(i, map.get(i)+1 || 1);
    return [...map].filter(([k,v]) => v === 1).map(i => i[0]).sort().join('')
}