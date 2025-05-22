function solution(answers) {
    const n1 = [1, 2, 3, 4, 5]
    const n2 = [2, 1, 2, 3, 2, 4, 2, 5]
    const n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    const correct1 = answers.map((a, i) => a === n1[(i+5)%5]).reduce((a,c) => a+c, 0)
    const correct2 = answers.map((a, i) => a === n2[(i+8)%8]).reduce((a,c) => a+c, 0)
    const correct3 = answers.map((a, i) => a === n3[(i+10)%10]).reduce((a,c) => a+c, 0)
    
    const list = [correct1, correct2, correct3]
    const max = Math.max(...list)
    const map = new Map()
    for(let i=0; i<3; i++) map.set(i+1, list[i])
    
    const result = [...map].reduce((acc, [k,v]) => {
        console.log(v === max, acc)
        if(v === max) acc.push(k)
        return acc
    }, [])
    
    return result
}