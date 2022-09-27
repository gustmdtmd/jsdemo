let list = [];

for (let i = 1; i <= 45; i++) {
  list.push(i);
}

let result = [];

for (let i = 0; i < 6; i++) {
  let index = Math.floor(Math.random() * list.length);

  //랜덤으로 선택한 인덱스의 값
  let num = list[index];

  //배열에서 인덱스의 값 제거
  list.splice(index, 1);

  result.push(num);
}

console.log(result);
for (let i = 0; i < 6; i++) {
  document.write(`<span class="ball">` + result[i] + `</span>`);
}
