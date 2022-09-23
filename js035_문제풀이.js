//js035_문제풀이.js

/*
[문제1]
아래 배열에서 undefined을 제외한 합계와 평균을 계산하는 프로그램을 구현하세요.

[데이터]
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];

[출력결과]
합계: 15
평균: 3

*/
let arr = [1, 2, 3, undefined, 4, undefined, undefined, 5];
let ary = arr.filter(function (element, index) {
  return element <= 5;
});

// console.log(`ary : ${ary}`);

function getSum(total, num) {
  return total + num;
}

let sum = ary.reduce(getSum);
console.log(`합계 : ${sum}`);
console.log(`평균 : ${sum / ary.length} `);

/*
 [문제2] 
  2차원 배열의 데이터를 이용해서 합계와 평균을 계산하는 프로그램을 구현하세요.
 [데이타]
 [['홍길동', 90, 85, 40],
  ['이영희', 100, 35, 75]];

  
 <출력결과]
 [[ '홍길동', 90, 85, 40, 215, '71.67'],
  [ '이영희', 100, 35, 75, 210, '70.00' ]]
  최고점: 71.67
*/

let jumsu = [
  ["홍길동", 90, 85, 40],
  ["이영희", 100, 35, 75],
];

let hap = [];
for (let i = 0; i < jumsu.length; i++) {
  jumsu[i].shift();
  hap[hap.length] = jumsu[i];
}

console.log(hap);
function getSum(total, num) {
  //total : 누적, num : 요소
  return total + num;
}
let summ = hap[0].reduce(getSum);
console.log(summ);
console.log(summ / hap[0].length);

function getSum(total, num) {
  //total : 누적, num : 요소
  return total + num;
}
let summ1 = hap[1].reduce(getSum);
console.log(summ1);
console.log(summ1 / hap[1].length);

console.log(hap[0].push(summ));
