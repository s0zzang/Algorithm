function solution(name, yearning, photo) {
    const map = new Map()
    name.map((v, i) => map.set(v, yearning[i]))
    
    let result = Array(photo.length).fill(0);
    for(let i=0; i<photo.length; i++){
        for(let j=0; j<photo[i].length; j++){
            result[i] += map.get(photo[i][j]) || 0;
        }
    }
    
    return result
}