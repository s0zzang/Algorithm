function solution(my_string) {
    const target = ['a', 'e', 'i', 'o', 'u']
    return [...my_string].map(s => target.includes(s) ? "" : s).join('')
}