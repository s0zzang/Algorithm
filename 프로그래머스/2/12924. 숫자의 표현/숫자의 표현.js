function solution(n) {
    let result = 1;
    
    for(let i=1; i<n/2; i++){
        let sum = i;
        let v = i + 1
        while(sum < n){
            sum += v
            v ++
            if(sum == n) result += 1
        }    
    }
    
    return result
}