function solution(name, yearning, photo) {
    return photo.map(value => value.reduce((a,c) => a += yearning[name.indexOf(c)] || 0 , 0))
}