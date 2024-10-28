function solution(n, words) {
    const set = new Set();
    let idx = 0;
    
    for(let i=0; i<words.length; i++){
        const prev = words[i-1]
        if(!prev) {
            set.add(words[i])
            continue
        }
        
        if(words[i][0] !== prev[prev.length-1] || set.has(words[i])) {
            idx = i+1
            break
        } else set.add(words[i])
    }
    return [idx ? idx%n ? idx%n : n : 0, Math.ceil(idx/n)]
}