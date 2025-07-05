function solution(start_num, end_num) {
    const countArr = []
    while(start_num>=end_num) countArr.push(start_num--)
    return countArr
}