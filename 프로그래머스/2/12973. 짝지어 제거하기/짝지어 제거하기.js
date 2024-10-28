function solution(s){
    const stack = [];
    const strs = [...s]
    if(s.length % 2) return 0
    while(strs.length){
        const target = strs.pop()
        if(target === stack[stack.length-1]) stack.pop()
        else stack.push(target)
    }
    return stack.length ? 0 : 1
}