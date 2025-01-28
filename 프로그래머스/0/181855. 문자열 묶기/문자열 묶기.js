function solution(strArr) {
    return Math.max(...strArr.reduce((acc, str) => {
        const length = str.length
        acc[length] = (acc[length] || 0) + 1
        return acc
    }, [0]))
}