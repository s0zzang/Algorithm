function solution(s){
    const stack = [];
    const strs = [...s]
    if(s.length % 2) return 0
    for(let i=0; i<s.length; i++){
        if(strs[i] === stack[stack.length-1]) stack.pop()
        else stack.push(strs[i])
    }
    return stack.length ? 0 : 1
}