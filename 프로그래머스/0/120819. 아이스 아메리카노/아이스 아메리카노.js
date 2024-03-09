function solution(money) {
    let count = 0;
    for(let i=0; i<=money; i++){
        if(money >= 5500) {
            count ++
            money -= 5500    
        }
    }
    return [count, money] 
}