function solution(a, b) {
    let result = 0;    
    const arr = a > b ? [b, a] : [a, b]    
    do {
        result += arr[0];
        arr[0]++
    } while(arr[0] <= arr[1])
    return result
}