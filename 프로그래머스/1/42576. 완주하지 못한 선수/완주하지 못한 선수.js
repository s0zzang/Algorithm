function solution(participant, completion) {
    const map = new Map()
    for(let person of completion){
        if(map.has(person)) map.set(person, map.get(person)+1);
        else map.set(person, 1)
    }
    for(let person of participant){
        if(map.has(person)){ 
            map.set(person, map.get(person)-1);
            if(!map.get(person)) map.delete(person)
        }
        else return person
    }
}
