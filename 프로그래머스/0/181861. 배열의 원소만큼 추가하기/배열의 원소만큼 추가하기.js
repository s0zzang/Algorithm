function solution(arr) {
    let res = []
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i]; j++){
            res.push(arr[i])
        }
    }
    return res
}