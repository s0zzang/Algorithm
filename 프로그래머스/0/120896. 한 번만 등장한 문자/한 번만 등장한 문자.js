function solution(s) {
    const strs = [...s]
    const dupli = [];
    const result = [];
    
    for(item of [...s]){
        const i = strs.shift()
        if(strs.includes(i) || dupli.includes(i)) dupli.push(i)
        else result.push(i)
    }
    
    return result.sort().join('')
}