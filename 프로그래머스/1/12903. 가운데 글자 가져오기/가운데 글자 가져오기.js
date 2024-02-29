function solution(s) {
    const n = s.length;
    return n%2 ? s[Math.ceil(n/2-1)] : s[n/2-1]+s[n/2]
}