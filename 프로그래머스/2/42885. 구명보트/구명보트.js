function solution(people, limit) {
    people.sort((a, b) => a - b); // 몸무게 순으로 정렬
    let left = 0; // 가장 가벼운 사람
    let right = people.length - 1; // 가장 무거운 사람
    let boats = 0; // 필요한 보트 수

    while (left <= right) {
        // 가장 무거운 사람과 가장 가벼운 사람의 합이 제한 이하면 같이 태움
        if (people[left] + people[right] <= limit) {
            left++; // 가벼운 사람 제외
        }
        right--; // 무거운 사람은 항상 제외
        boats++; // 보트 한 대 추가
    }

    return boats;
}