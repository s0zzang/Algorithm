function solution(n){
    let battery = 1;
    while(n > 1){
        if(n%2) {
            battery += 1;
            n -= 1;
        } else n /= 2
    }
    return battery
}