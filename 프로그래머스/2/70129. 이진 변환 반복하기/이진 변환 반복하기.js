function solution(s) {
    let [turn, count] = [0, 0];
    while(s !== '1'){
        turn ++;
        count += s.replace(/1/g, '').length
        s = s.replace(/0/g, '').length.toString(2)
    }
    return [turn, count]
}