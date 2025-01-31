function solution(k, score) {    
    const list = [];
    return score.reduce((a,c) => {
        list.push(c)
        list.sort((a,b) => a-b)
        if(list.length > k) list.shift()
        a.push(list[0])
        return a
    }, [])
}