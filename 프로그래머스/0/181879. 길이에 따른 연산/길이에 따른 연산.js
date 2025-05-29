function solution(num_list) {
    const isTenUnder = num_list.length > 10
    return isTenUnder ? num_list.reduce((a,c) => a+c, 0) : num_list.reduce((a,c ) => a*c, 1)
}