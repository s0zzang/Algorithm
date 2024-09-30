function solution(arr){
    // stack 사용
    // const stack = [];
    // for(let num of arr){
    //     if(stack[stack.length -1] !== num) stack.push(num)
    // } 
    // return stack
    
    // filter 사용
    return arr.filter((num, idx) => num !== arr[idx-1])
}