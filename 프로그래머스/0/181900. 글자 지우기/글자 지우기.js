function solution(my_string, indices) {
    const res = [...my_string]
    const sorted = indices.sort((a,b) => b-a)
    for(i of sorted) res.splice(i,1)
    return res.join('')
}