function solution(n) {
    let res = 0;
    for(let i=2; i<=n; i++){
        if(!(i%2)) res += i
    }
    return res
}