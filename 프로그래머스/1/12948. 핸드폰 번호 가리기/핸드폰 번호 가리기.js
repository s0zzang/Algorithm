function solution(phone_number) {
    const arr = new Array(phone_number.length-4).fill('*')
    return [...arr, ...[...phone_number].splice(-4)].join('')
}