function solution(participant, completion) {
    const map = new Map()
    for(let person of participant) map.set(person, map.has(person) ? map.get(person)+1 : 1)
    for(let person of completion) map.set(person, map.get(person)-1)
    for(let [k,v] of map) if(v > 0) return k
}
