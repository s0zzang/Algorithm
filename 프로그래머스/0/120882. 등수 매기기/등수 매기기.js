function solution(score) {
    const average = score.map(([en, math]) => (en + math)/2);
    const sort = score.map(([en, math]) => (en + math)/2).sort((a,b) => b-a)
    const map = new Map();
    let rank = 0;
    
    for(let i=0; i<score.length; i++){
        
        if(sort[i] === sort[i-1]){
            rank++;
            continue
        }
        
        rank++
        map.set(sort[i], rank)
    }
    
    return average.map(n => map.get(n))
}