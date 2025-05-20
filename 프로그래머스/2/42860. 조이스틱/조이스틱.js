function solution(name) {
    let upDown = 0;
    let minMove = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      const diff = char.charCodeAt(0) - 'A'.charCodeAt(0);
      upDown += Math.min(diff, 26 - diff);
    }
    
    for (let i = 0; i < name.length; i++) {
        let next = i + 1;
        while (next < name.length && name[next] === 'A') next++;
        minMove = Math.min(
            minMove,
            i * 2 + name.length - next,
            i + 2 * (name.length - next)
        );
    }

    return upDown + minMove
}