function solution(a, b, c) {
    const set = new Set([a, b, c])
    return set.size === 3
        ? a + b + c 
        : set.size === 2 
            ? (a + b + c) * (a*a + b*b + c*c) 
            : (a + b + c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c)
}