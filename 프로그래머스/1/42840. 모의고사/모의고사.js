function solution(answers) {
    const n1 = [1, 2, 3, 4, 5]
    const n2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const correct1 = answers.filter((a, i) => a === n1[(i+5)%5]).length
    const correct2 = answers.filter((a, i) => a === n2[(i+8)%8]).length
    const correct3 = answers.filter((a, i) => a === n3[(i+10)%10]).length
    
    const max = Math.max(correct1, correct2, correct3)
    const result = []
    
    if(correct1 === max) result.push(1)
    if(correct2 === max) result.push(2)
    if(correct3 === max) result.push(3)
    
    return result
}