function solution(s1, s2) {
    return s1.filter(s => s2.indexOf(s) > -1).length
}