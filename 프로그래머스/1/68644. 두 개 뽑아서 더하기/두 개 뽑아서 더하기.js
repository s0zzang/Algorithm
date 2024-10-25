function solution(numbers) {
    const set = new Set();
    for(let i=0; i<numbers.length; i++){
        for(let j=1; j<numbers.length; j++){
            if(i === j) continue
            if(!set.has(numbers[i] + numbers[j])) set.add(numbers[i] + numbers[j])
        }
    }
    return [...set].sort((a,b) => a-b)
}