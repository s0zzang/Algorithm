function solution(order) {
    return [...`${order}`].reduce((a,c) => {
        if(!(+c % 3) && c > 0) a++;
        return a;
    }, 0)
}