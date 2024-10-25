function solution(d, budget) {
    d.sort((a,b) => b-a)
    let result = 0;
    while(budget >= d[d.length-1]){
        budget -= d.pop();
        result ++;
    }
    return result
}