function solution(priorities, location) {
    const result = [];
    let q = priorities.map((priority, idx) => ({priority, idx}));
    
    while(q.length){
        const {priority,idx} = q.shift()
        const isMax = q.every(item => priority >= item.priority)
        if(isMax) result.push({priority, idx})
        else q.push({priority, idx})
    }
    
    return result.findIndex(i => i.idx == location) + 1
}