//js018_for.js

/* 
  for문
  for문은 조건식을 만족할 때까지 특정 실행문을 반복해서 실행한다.
  for(초기값; 조건식; 증감식){
    실행문;
  }

  초기값 -> 조건식(true) -> 실행문 -> 증감식
         -> 조건식(true) -> 실행문 -> 증감식
         -> 조건식(false) -> 반복문 빠져나감
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log(`==========================================`);

//for문에서 조건식을 생략하면 무한loop로 돌아간다.
let i, sum;

for (i = 1, sum = 0; ; i++) {
  sum += i;
  if (sum >= 30) break; //조건문이 하나면 {} 생략가능, 2개 이상부터는 {} 생략불가능.
}
console.log(`sum>=30 일 때, i=${i}이고, sum=${sum}이다.`);

console.log(`==========================================`);

/*
1~10 짝수와 홀수의 합을 구해서 출력하는 프로그램을 구현하세요.
[출력결과]
짝수 : 30
홀수 : 25
*/
let even = 0,
  odd = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    even += i;
  } else {
    odd += i;
  }
}
console.log(`[출력결과]
짝수 : ${even}
홀수 : ${odd}`);

console.log(`==========================================`);

/*
  continue: 반복문에서 continue를 만나면 조건식으로 이동한다.
  for(초기식; 조건식; 증감식){continue;}
  while(조건식){continue;}
*/

for (let i = 1; i <= 10; i++) {
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}

console.log(`==========================================`);

/*
  중첩반복문
  for(초기값; 조건식; 증감식){
    for(초기값; 조건식; 증감식){
       실행문;
    }
  }
*/

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    //console.log(`i=${i} j=${j}`);
    process.stderr.write(`\"`);
    process.stderr.write(`i=${i},j=${j}`);
    process.stderr.write(`\" \t`);
  }
  process.stderr.write(`\n`);
}

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
//이스케이프 : 프로그램에서 주변장치를 컨트롤하기 위해서 사용되는 기능
// \n : 줄바꿈, \t : 탭, \", \', \b : 백스페이스, \v : 수직탭

console.log(`==========================================`);
console.log(` `);
//label 정의
movei: for (let i = 1; i <= 5; i++) {
  for (let j = 10; j <= 20; j++) {
    for (let k = 1; k <= 3; k++) {
      console.log(`i=${i}, j=${j}, k=${k}`);
      if (k == 2) break movei;
    }
  }
}
