function solution(keyinput, board) {
    const pos = [0, 0]
    const dx = [0, 1, -1, 0]
    const dy = [1, 0, 0, -1]
    const getDirection = (key) => {
        if (key === 'up') return 0
        else if (key === 'right') return 1
        else if (key === 'left') return 2
        else return 3
    }
    const isInBoundary = (x, y) => {
        const [bx, by] = [board[0]/2, board[1]/2]
        if(x < 0) x *= -1
        if(y < 0) y *= -1
        if(x <= bx && y <= by) return true
        return false
    }
    
    for(let input of keyinput) {
        const dir = getDirection(input)
        const [nx, ny] = [pos[0]+dx[dir], pos[1]+dy[dir]]
        if(isInBoundary(nx, ny)) {
            pos[0] =+ nx
            pos[1] =+ ny
        }
    }
    
    return pos
}