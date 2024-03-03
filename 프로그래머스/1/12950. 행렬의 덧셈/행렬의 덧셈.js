function solution(arr1, arr2) {
    const res = [];
    for(let i=0; i<arr1.length; i++){
        res.push(arr1[i].map((t,idx) => t + arr2[i][idx]))
    }
    return res;
}