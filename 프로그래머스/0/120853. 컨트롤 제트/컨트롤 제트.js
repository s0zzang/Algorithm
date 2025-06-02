function solution(s) {
    const arr = s.split(' ');
    let sum = arr.reduce((a,c) => {
        if(c !== 'Z') return a + +c
        else return a
    }, 0)
    for(let i=0; i<arr.length; i++) if(arr[i] === 'Z') sum -= arr[i-1]
    
    return sum
}