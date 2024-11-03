function solution(s) {
    let [turn, count] = [0, 0];
    while(s !== '1'){
        turn ++;
        count += s.split('0').length - 1
        s = s.split('0').join('').length.toString(2)
    }
    return [turn, count]
}