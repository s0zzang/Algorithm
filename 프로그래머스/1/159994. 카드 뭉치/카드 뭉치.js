function solution(cards1, cards2, goal) {    
    return goal.reduce((a,c) => {
        if(c === cards1[0] || c === cards2[0]){
            if(cards1.includes(c)) cards1.shift()
            if(cards2.includes(c)) cards2.shift()
        } else {
            a = 'No'
        }
            
        return a
    }, 'Yes')
}