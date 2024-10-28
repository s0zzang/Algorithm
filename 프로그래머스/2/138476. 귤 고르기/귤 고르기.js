function solution(k, tangerine) {
    const map = new Map();
    for(t of tangerine){
        if(map.has(t)) map.set(t, map.get(t)+1)
        else map.set(t, 1)
    }
    const sort = [...map].sort((a,b) => b[1]-a[1])    
    return sort.reduce((res, [_, count]) => res += (k -= count) > 0 && 1, 1)
}