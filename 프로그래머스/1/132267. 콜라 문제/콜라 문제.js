function solution(a, b, n) {
    let result = 0;
    while(n >= a){
        result += b*Math.floor(n/a)
        n = b*Math.floor(n/a) + n%a
    }
    return result
}