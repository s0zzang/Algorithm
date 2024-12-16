function solution(n,a,b){
    // n번 만큼 반복할거고 a랑 b는 2를 나누되 반올림하여 값 갱신
    // 반복문이 한번씩 실행될때마다 결과 +1
    
    for(var i=1; i<n; i++){
        if(Math.max(a,b) - Math.min(a,b) === 1 && Math.min(a,b)%2) return i
        a = Math.ceil(a/2)
        b = Math.ceil(b/2) 
    }
    
    return i
}