function solution(str1, str2) {
    return [...str1].reduce((res, cur, idx) => res + cur + str2[idx], '')
}