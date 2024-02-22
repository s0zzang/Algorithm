function solution(rank, attendance) {
    const res = []
    for(let i=1; i<=rank.length; i++){
        if(attendance[rank.indexOf(i)]){
            res.push(rank.indexOf(i))
        }
    }
    return res[0]*10000 + res[1]*100 + res[2]
}