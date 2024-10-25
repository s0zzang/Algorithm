function solution(id_pw, db) {
    const map = new Map()
    for([id,pw] of db) map.set(id, pw)
    if(map.get(id_pw[0])){
        if(map.get(id_pw[0]) === id_pw[1]) return 'login'
        else return "wrong pw"
    } else return 'fail'
}