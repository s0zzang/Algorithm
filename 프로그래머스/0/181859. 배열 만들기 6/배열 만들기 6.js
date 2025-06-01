function solution(arr) {
    const answer = [];
    for(let i=0; i<arr.length; i++){
        if(!(answer.length)) answer.push(arr[i])
        else if (arr[i] === answer.at(-1)) answer.pop()
        else answer.push(arr[i])
    }
    return answer.length ? answer : [-1];
}