function solution(spell, dic) {    
    for(let words of dic){
        const word = new Set([...words])
        if(spell.length !== word.size) continue
        for(let s of word) if(spell.includes(s)) word.delete(s)
        if(!word.size) return 1
    }
    return 2
}