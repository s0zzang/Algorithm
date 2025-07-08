function solution(my_strings, parts) {
    const result = [];
    parts.map(([start, end], i) => result.push(my_strings[i].slice(start, end+1)))
    return result.join('')
}