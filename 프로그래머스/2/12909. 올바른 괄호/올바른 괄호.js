function solution(s){
    // 숫자만 이용한 풀이법
    let stack = 0;
    for(let str of s){
        str === '(' ? stack++ : stack--
        if(stack < 0) return false
    }
    return stack === 0
}