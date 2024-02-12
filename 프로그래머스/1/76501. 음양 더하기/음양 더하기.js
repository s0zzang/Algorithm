function solution(absolutes, signs) {
    let result = 0;
    for(let i=0; i<signs.length; i++){
        result += (signs[i] ? 1 : -1) * absolutes[i];
    }
    return result
}