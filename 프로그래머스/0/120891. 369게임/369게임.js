function solution(order) {
    // return [...`${order}`].reduce((a,c) => {
    //     if(!(+c % 3) && c > 0) a++;
    //     return a;
    // }, 0)
    
    // matchAll : iterator 객체 반환
    return [...(''+order).matchAll(/[369]/g)].length
    
    // match : 배열 반환
    // return (''+order).match(/[369]/g).length
}