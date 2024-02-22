function solution(my_string) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const ARR = arr.join().toUpperCase().split(',')
    const arrs = [...ARR,...arr]
    
    let res = []
    for(let arr of arrs){
        res.push([...my_string].filter(item => item === arr))
    }
    return res.map(item => item.length)
}