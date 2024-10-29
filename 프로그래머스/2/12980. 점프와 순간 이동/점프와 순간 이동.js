function solution(n){
    return [...n.toString(2)].filter(n => n === '1').length
}