function solution(n, arr1, arr2) {
    const arr_1 = toBinary(arr1)
    const arr_2 = toBinary(arr2)
    
    return arr_1.map((line, lineIdx) => {
        const res = [...line].map((cur, curIdx) => {
            if(cur == 1 || arr_2[lineIdx][curIdx] == 1) return '#'
            else return ' '    
        })
        return res.join('')
    })
    
    function toBinary(arr){
        return arr.map(num => {
            let target = num.toString(2)
            if(target.length < n){
                while(target.length !== n) target = 0+target
            }
            return target
        })
    }
}