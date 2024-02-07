function solution(s){
    str = [...s.toLowerCase()]
    const lengthP = str.filter((t)=>t==='p').length
    const lengthY = str.filter((t)=>t==='y').length
    const answer = lengthP === lengthY ? true : false;
    return answer;
}