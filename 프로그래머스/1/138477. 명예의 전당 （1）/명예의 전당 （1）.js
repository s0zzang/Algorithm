function solution(k, score) {    
    const [list, result] = [[], []];
    
    for(let s of score){
        list.push(s)
        list.sort((a,b) => b-a)
        
        if(list.length <= k) result.push(list[list.length-1])
        else result.push(list[k-1])
    }
    
    return result
}