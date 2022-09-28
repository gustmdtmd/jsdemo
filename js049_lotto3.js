//1. 6개의 난수 구하고 중복체크
let lotto = [];
for (let i = 0; i <= 5; i++) {
  let ran = Math.floor(Math.random() * 45) + 1;
  lotto.push[ran];

  for (j = 0; j < i; j++) {
    if (lotto[j] == lotto[i]) {
      i--;
      break;
    }
  }
}

//2. 정렬
lotto.srot((a, b) => {
  return a - b;
});

//3. 출력하기

let divList = document.querySelectorAll(`div.wrap div`);
divList.forEach((element, index) => {
  element.innerText = lotto[idx];
});
