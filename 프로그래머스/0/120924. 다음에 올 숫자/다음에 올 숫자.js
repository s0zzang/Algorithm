function solution(common) {
    const [first, second, third] = common
    return second-first === third-second 
        ? common[common.length-1] + second-first 
        : common[common.length-1] * (second/first)
}