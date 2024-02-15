function solution(strArr) {
    const result = [];
    const arr = strArr.forEach((item, idx) => {
        idx % 2 ? result.push(item.toUpperCase()) : result.push(item.toLowerCase())
    })
    return result;
}