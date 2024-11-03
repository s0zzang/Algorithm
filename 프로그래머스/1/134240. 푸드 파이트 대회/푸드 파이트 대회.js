function solution(food) {
    const foods = food.reduce((res, food, idx) => {
        if(food < 2) return res
        while((food -= 2) >= 0) res += idx
        return res
    }, '')
    return `${foods}0${[...foods].reverse().join('')}`
}