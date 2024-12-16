function solution(topping) {
    let result = 0;
    const left = new Map([[topping[0], 1]])
    const right = new Map()
    
    for(let i=1; i<topping.length; i++){
        right.set(topping[i], right.get(topping[i])+1 || 1)
    }
    
    for(let i=1; i<topping.length; i++){
        left.set(topping[i], left.get(topping[i]) ? left.get(topping[i])+1 : 1)
        if(right.get(topping[i]) === 1) {
            right.delete(topping[i])
        } else {
            right.set(topping[i], right.get(topping[i]) -1)             
        }
        
        if(left.size === right.size) result += 1
    }
    return result
}