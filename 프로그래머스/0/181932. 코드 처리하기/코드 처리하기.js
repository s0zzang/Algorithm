function solution(code) {
    let mode = false;
    let ret = ''
    for(let i=0; i<code.length; i++){
        if(code[i] === '1') mode = !mode;
        else {
            if(!mode && !(i%2)) ret += code[i]
            if(mode && i%2) ret += code[i]
        }
    }
    
    return ret.length ? ret : "EMPTY"
}