function solution(arr, idx) {
    arr.splice(0, idx)
    const index = arr.findIndex(el => el === 1)
    return index !== -1 ? index+idx : index ;
}