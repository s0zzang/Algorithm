function solution(n)
{
    var answer = 0;
    
    const arr = (n + '').split('')
    answer = arr.reduce((acc, cur) => acc + +cur, 0)

    return answer;
}