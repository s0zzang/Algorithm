function solution(numlist, n) {
    const map = new Map();
    for(let num of numlist) map.set(num - n, num)
    const sorted = [...map].sort((a,b) => {
        if(Math.abs(a[0])>Math.abs(b[0])) return 1;
        else if(Math.abs(a[0])<Math.abs(b[0])) return -1;
        else {
            if(a[0]>b[0]) return -1;
            else return 1;
        };
    })
    
    return sorted.map(([k,v]) => v)
}