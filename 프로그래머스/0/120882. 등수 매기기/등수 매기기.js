function solution(score) {
    const average = score.map(([en, math]) => (en + math)/2);
    const sort = [...average].sort((a,b) => b-a)
    return average.map(n => sort.indexOf(n) + 1)
}