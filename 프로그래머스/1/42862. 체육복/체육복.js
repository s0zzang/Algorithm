function solution(n, lost, reserve) {
    const res = new Set(reserve.sort((a,b) => a-b));
    const los = new Set(lost.sort((a,b) => a-b));
    let possible = n - lost.length
    
    for(let one of los) {
        if(res.has(one)) {
            res.delete(one)
            los.delete(one)
            possible++
        }
    }
    
    for(let one of los){
        for(let i=-1; i<2; i++){
            if(res.has(one+i)){
                res.delete(one+i)
                possible++;
                break
            }
        }
    }
    
    return possible
}