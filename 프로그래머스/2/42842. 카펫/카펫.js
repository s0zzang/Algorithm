function solution(brown, yellow) {
    for(let i=1; i<=yellow; i++){
        if(!(yellow%i)) {
            const [w, h] = [i+2, yellow/i]
            if(brown === w*2 + h*2) return [Math.max(w, h+2), Math.min(w, h+2)]
        }
    }
}