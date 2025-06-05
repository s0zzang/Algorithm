const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n")[0];

//재귀 -> 1) 자기자신을 호출 2) 재귀 종료 조건

const p1 = `"재귀함수가 뭔가요?"`;
const p2 = `"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.`;
const p3 = `마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.`;
const p4 = `그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."`;
const p5 = `"재귀함수는 자기 자신을 호출하는 함수라네"`;
const p6 = `라고 답변하였지.`;
const bar = "____";

const recursion = (n, depth) => {
  const bars = bar.repeat(depth);

  console.log(`${bars}${p1}`); // 재귀 함수가 뭔가요?
  if (n === 0)
    // ⭐️ 0이면 resursion 을 호출하지 않기 때문에 무한루프에 빠지지 않음
    console.log(`${bars}${p5}`); // 재귀함수는 자기 자신을 호출하는 함수라네
  else {
    console.log(`${bars}${p2}`);
    console.log(`${bars}${p3}`);
    console.log(`${bars}${p4}`);
    recursion(n - 1, ++depth);
  }
  console.log(`${bars}${p6}`); // 라고 답변하였지.
};

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.");
recursion(input, 0);