function solution(d, budget) {
    return d.sort((a,b) => a-b).reduce((count, price) => count + ((budget -= price) >= 0), 0)
}