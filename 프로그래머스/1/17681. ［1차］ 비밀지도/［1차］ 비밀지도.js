function solution(n, arr1, arr2) {
    const toBinary = (num) => num.toString(2).padStart(n, 0)
    return arr1.map((num, idx) => toBinary(num | arr2[idx]).replace(/[01]/g, a => +a ? '#' : ' '))
}