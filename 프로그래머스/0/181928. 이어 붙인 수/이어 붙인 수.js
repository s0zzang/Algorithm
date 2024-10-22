function solution(num_list) {
    let odd = '';
    let even = '';
    for(num of num_list){
        if(num % 2) even += num
        else odd += num
    }
    return +odd + +even
}