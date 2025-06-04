function solution(my_string) {
    const result = [];
    for(let str of my_string){
        if(!isNaN(+str)) result.push(+str)
    }
    return result.sort()
}