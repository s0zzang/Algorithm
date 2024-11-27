function solution(n) {
    /*
        도착지 4칸 (2)
        - 3칸에서 1칸 점프
        - 2칸에서 2칸 점프
        
        도착지 3칸 (2)
        - 2칸에서 1칸 점프
        - 1칸에서 2칸 점프
        
        도착지 2칸 (2)
        - 1칸에서 1칸 점프
        - 0칸에서 2칸 점프
        
        도착지 1칸 (1)
        - 0칸에서 1칸 점프
        
    */
    
    if(n === 1) return 1
    if(n === 2) return 2
    
    const dp = [0, 1, 2]
    for(i=3; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567
    }
    return dp[dp.length-1]
}