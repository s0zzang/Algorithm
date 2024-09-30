function solution(p, s) {
    const stack = {};
    let day = 1;
    for(let i=0; i < p.length; i++){
        while(p[i] + (s[i]*day) < 100) day++
        stack[day] = stack[day] ? stack[day]+1 : 1
    }
    return Object.values(stack)
}