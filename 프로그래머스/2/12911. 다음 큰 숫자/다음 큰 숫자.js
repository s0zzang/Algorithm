function solution(n) {
    let result = 0;
    let comparison = n
    const numberOf1 = (n) => [...(n.toString(2))].reduce((length, cur) => length + !!(cur === '1'), 0)
    const numberOfn = numberOf1(n)
    
    while(!result){
        comparison += 1
        if(numberOfn === numberOf1(comparison)) result = comparison   
    }
    
    return comparison
}