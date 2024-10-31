function solution(n) {
    let res = 0;
    for(let i=0; i<n; i++){
        res += 1;
        while ( !(res % 3) || String(res).includes('3') ) res += 1;
    }
    return res;
}