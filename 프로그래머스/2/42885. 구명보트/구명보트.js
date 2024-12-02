function solution(people, limit) {
    // 정렬 후 투 포인터 설정
    // Left, right 비교하며 limit을 넘지 않는지 확인
    // [50, 50, 70, 80] 
    
    /*
    left:people[0] => 50 
    right:people.length-1 => 80
    right:people.length-2 => 70
    right:people.length-3 => 50
        count++
    
    left:people[1] => 50 (이미 찾은걸 어떻게 구분하지)
    
    */
    // left:50 right:people.length-1 => 80
    // 
    
    people.sort((a,b) => a-b)
    let left = 0;
    let right = people.length-1;
    let result = 0;
    console.log(people)
    
    while(left <= right){
        console.log(people[left] , people[right])
        if(people[left] + people[right] <= limit) left++;
        right--;
        result++;
    }
    
    return result
}