function solution(priorities, location) {
    const result = [];
    let q = priorities.map((priority, idx) => ({priority, idx}));
    
    while(q.length){
        const {priority,idx} = q.shift()
        const isMin = q.some(item => priority < item.priority)
        if(isMin) q.push({priority, idx})
        else result.push({priority, idx})
    }
    
    return result.findIndex(i => i.idx == location) + 1
}