function solution(my_string, num1, num2) {
    const result = [...my_string]
    result[num1] = my_string[num2]
    result[num2] = my_string[num1]
    return result.join('')
}