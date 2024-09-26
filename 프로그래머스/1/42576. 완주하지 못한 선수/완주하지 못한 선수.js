function solution(participant, completion) {
    const map = new Map()
    for(let person of completion) map.set(person, map.has(person) ? map.get(person)+1 : 1)
    for(let person of participant){
        if(map.has(person)){ 
            map.set(person, map.get(person)-1);
            if(!map.get(person)) map.delete(person)
        }
        else return person
    }
}
