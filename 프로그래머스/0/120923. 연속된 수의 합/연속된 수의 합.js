function solution(num, total) {
    let res = [];
    if(num % 2){
        let n = (total/num) - ((num-1)/2)
        while(res.length < num){
            res.push(n)
            n++
        }        
    } else {
        let n = Math.floor(total/num) - ((num-2)/2)
        while(res.length < num){
            res.push(n)
            n++
        }
    }
    return res
}