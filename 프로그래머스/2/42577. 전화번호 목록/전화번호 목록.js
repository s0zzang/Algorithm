function solution(phone_book) {    
    const sorted = phone_book.sort()    
    for(let i=0; i<phone_book.length; i++){
        if(i === phone_book.length-1) return true
        if(sorted[i+1].startsWith(sorted[i])) return false
    }
}