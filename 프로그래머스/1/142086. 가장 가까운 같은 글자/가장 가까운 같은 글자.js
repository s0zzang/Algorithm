function solution(s) {
    const res = [];
    
    for(let i=s.length-1; i>0; i--){
        let pointer = i-1;
        
        while(pointer > -1){
            if(s[i] === s[pointer]) {
                res.push(i-pointer)
                break
            } else {
                if(pointer === 0) res.push(-1)
                pointer--;
            }
        }
    }
    
    res.push(-1)
    return res.reverse()
}