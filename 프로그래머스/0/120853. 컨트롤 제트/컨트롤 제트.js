function solution(s) {
    const stack = [];
    s.split(' ').map(i => {
        if(i === 'Z') stack.pop()
        else stack.push(+i)
    })
    return stack.reduce((a,c) => a+c, 0)
}