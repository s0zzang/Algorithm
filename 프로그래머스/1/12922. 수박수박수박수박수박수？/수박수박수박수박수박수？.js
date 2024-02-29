function solution(n) {
    return [...'_'.repeat(n)].reduce((acc,cur,i) =>  acc + (i%2 ? '박' : '수') ,'')
}