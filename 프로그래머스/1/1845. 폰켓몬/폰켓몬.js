function solution(nums) {
    const newSet = new Set(nums)
    return Math.min(newSet.size, (nums.length)/2);
}