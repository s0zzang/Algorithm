function solution(s) {
    let count = 0;
    for(let i=0; i<150000; i++){
        if(s === '1') return [i, count]
        count += s.split('0').length - 1
        s = s.split('0').join('').length.toString(2)
    }
}