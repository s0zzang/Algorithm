function solution(price, money, count) {
    const total = [...'_'.repeat(count)].reduce((a,c,i) => a + (price*(i+1)),0);
    return total<money ? 0 : total-money
}