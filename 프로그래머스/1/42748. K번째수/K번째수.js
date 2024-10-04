function solution(array, commands) {
    const res = [];
    for(let command of commands) {
        const [start, end, position] = command
        res.push(array.slice(start-1, end).sort((a,b) => a-b)[position-1])
    }
    return res
}