function solution(array, n) {
    const sortedArr = array.sort()
    const minusArr = sortedArr.map(arrNum => Math.abs(arrNum - n))
    const min = Math.min(...minusArr)
    return sortedArr[minusArr.indexOf(min)]
}