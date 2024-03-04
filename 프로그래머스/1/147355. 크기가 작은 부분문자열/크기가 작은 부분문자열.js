function solution(t, p) {
    let res = 0
    for(let i=0; i<t.length; i++){
        const num = ([...t].splice(i, p.length).join(''));
        if (+num <= +p && num.length >= p.length) ++res
    }
    return res
}