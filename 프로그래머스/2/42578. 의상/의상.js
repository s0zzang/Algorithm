function solution(clothes) {
    const hash = {};
    for(cloth of clothes){
        if(cloth[1] in hash) hash[cloth[1]]++
        else hash[cloth[1]] = 1
    }
    const values = Object.values(hash).reduce((acc,cur) => acc * (cur+1), 1)
    return values - 1
}