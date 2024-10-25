function solution(dots) {
    const x = dots.map(([x,y]) => x)
    const y = dots.map(([x,y]) => y)
    return (Math.max(...x)-Math.min(...x)) * (Math.max(...y)-Math.min(...y))
}