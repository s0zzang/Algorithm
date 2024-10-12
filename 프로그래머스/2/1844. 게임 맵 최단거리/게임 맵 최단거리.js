function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const visited = Array(row).fill().map(_ => Array(col).fill(false))
    const q = []
    const delta = [[-1,0],[1,0],[0,-1],[0,1]]
    let result = -1;
    let head = 0;
    
    q.push([0,0,1])
    visited[0][0] = true
    
    while(head < q.length){
        const [curX, curY, curL] = q[head];
        head++;
        
        if(curX === row-1 && curY === col-1) {
            result = curL;
            break;
        }
            
        for(let [dx, dy] of delta){
            const nextX = dx + curX
            const nextY = dy + curY
            
            if(nextX >= 0 && nextX < row && nextY >= 0 && nextY < col){
                if(maps[nextX][nextY] == 1 && !(visited[nextX][nextY])){
                    visited[nextX][nextY] = true
                    q.push([nextX, nextY, curL+1])
                }
            }
        }
    }
    
    return result
}