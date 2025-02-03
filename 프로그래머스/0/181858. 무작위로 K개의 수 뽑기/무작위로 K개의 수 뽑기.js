function solution(arr, k) {
    const set = [...new Set(arr)]
    return set.length > k ? set.slice(0, k) : [...set, ...Array.from({length: k-set.length}).fill(-1)]
}