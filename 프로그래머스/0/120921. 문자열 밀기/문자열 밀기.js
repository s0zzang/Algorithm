function solution(A, B) {
    const arr = [...A]
    let result = 0;
    for(let i=0; i<arr.length; i++){
        if(arr.join('') === B) return i
        arr.unshift(arr.pop())
    }
    return -1
}