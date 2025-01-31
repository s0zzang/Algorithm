function solution(k, score) {    
    const [list, result] = [[], []];
    
    for(let s of score){
        list.push(s)
        list.sort((a,b) => a-b)
        if(list.length > k) list.shift()
        result.push(list[0])
    }
    
    return result
}