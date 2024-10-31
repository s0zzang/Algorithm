function solution(polynomial) {
    const arr = polynomial.split(' + ').map(el => el === 'x' ? '1x' : el)
    const res = arr.reduce((res, el) => {
        if(el.includes('x')) res[0] += +(el.split('x')[0])
        else res[1] += +(el)
        return res
    }, [0, 0]).map((el, idx) => {
        if(idx === 0) el = el === 1 ? 'x' : `${el}x`
        return el
    })
    
    return res[0] === '0x'
        ? `${res[1]}`
        : res[1] ? `${res[0]} + ${res[1]}` : res[0]
}