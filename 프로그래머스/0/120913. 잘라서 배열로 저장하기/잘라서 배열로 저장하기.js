function solution(my_str, n) {
    const target = [...my_str]
    let word = ''
    return target.reduce((a, c, i) => {
        if(word.length < n) word += c;
        if(word.length === n) {
            a.push(word)    
            word = ''
        }
        
        if(i === my_str.length-1 && word) a.push(word)
        return a
    }, [])
}