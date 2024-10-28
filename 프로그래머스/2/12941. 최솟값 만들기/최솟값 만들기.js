function solution(A,B){
    A.sort((a,b) => a-b)
    B.sort((a,b) => b-a)
    return A.reduce((res,cur,idx) => res + (cur*B[idx]), 0)
}