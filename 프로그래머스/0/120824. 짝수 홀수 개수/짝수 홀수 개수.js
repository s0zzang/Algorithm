function solution(num_list) {
    const res = [0,0]
    for(num of num_list){
        if(num % 2) res[1] += 1;
        else res[0] += 1;
    }
    return res
}