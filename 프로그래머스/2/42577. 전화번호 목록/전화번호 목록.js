function solution(phoneBook) {
    let hashMap = {};
    for (let phone of phoneBook) hashMap[phone] = true;
    for (let phone of phoneBook) {
        let prefix = "";
        for (let char of phone) {
            prefix += char;
            // 접두어가 해시맵에 존재하고, 접두어가 자신이 아닌 다른 번호라면 false 반환
            if (prefix in hashMap && prefix !== phone) {
                return false;
            }
        }
    }

    return true;
}