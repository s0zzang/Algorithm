function solution(priorities, location) {
    const result = [];
    let q = priorities.map((priority, idx) => ({
        priority, idx
    }));
    
    while(q.length){
        const {priority,idx} = q.shift()
        let chk = 0;
        for(let item of q) if(priority >= item.priority) chk++
        if(chk === q.length) result.push({priority, idx})
        else q.push({priority, idx})
    }
    
    return result.findIndex(i => i.idx == location) + 1
}