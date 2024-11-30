function solution(strings, n) {
    return strings.sort((a, b) => {
        
        if(a[n] < b[n]) return -1
        if(a[n] > b[n]) return 1
        
        if(a[n] === b[n]) {
            for(let i=0; i<a.length; i++){
                if(a[i] > b[i]) return 1
                if(a[i] < b[i]) return -1
                if(a[i] === b[i]) continue
            }
        }
    })
}