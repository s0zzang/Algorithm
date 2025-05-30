function solution(todo_list, finished) {
    const set = new Set()
    todo_list.map((item, i) => !finished[i] && set.add(item))
    return [...set]
}