function solution(s){
    if(!s.length % 2) return false;
    const stack = []
    for(let str of s){
        if(str === '(') stack.push(str)
        else if(stack.pop() !== '(') return false
    }
    return stack.length === 0
}