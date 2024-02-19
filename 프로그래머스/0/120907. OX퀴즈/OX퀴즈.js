function solution(quiz) {
    let res = [];
    for(let i=0; i<quiz.length; i++){
        const target = quiz[i].split(' ')
        if(target.includes('+')){
            res.push((+target[0]) + (+target[2]) == target[4] ? "O" : "X")
        } else {
            res.push((+target[0]) - (+target[2]) == target[4] ? "O" : "X")
        }
    }
    return res
}