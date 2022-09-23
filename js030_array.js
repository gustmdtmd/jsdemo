//js030_array.js

let scores = [100, 90, 100];
console.log(scores); //[100, 90, 100]  Array(3)

console.log(scores[0]); //100
console.log(scores[1]); //90
console.log(scores[2]); //100
console.log(scores[3]); //undefined
console.log(scores.length); //3

//다른 타입끼리 가능
let person = [`John`, `Doe`, 26, true];
/*
John string
Doe string
26 number
true boolean
*/
for (let idx in person) {
  console.log(person[idx], typeof person[idx]);
}

//배열 안엔 배열 가능
let student = [`홍길동`, [100, 90, 20]];
/*
홍길동 string
[ 100, 90, 20 ] object
*/
for (let idx in student) {
  console.log(student[idx], typeof student[idx]);
}

//new로 선언
let cars = new Array("Sasb", `Volvo`, `BMW`); //cars=[]
/*
Sasb string
Volvo string
BMW string
*/
for (let idx in cars) {
  console.log(cars[idx], typeof cars[idx]);
}

let color = [];
console.log(color.length); //0
color[0] = `red`;
console.log(color.length); //1
color.push(`green`);
console.log(color.length); //2
color.push(759);
console.log(color.length); //3
color[8] = `blue`;
console.log(color.length);
//9 4~8는 빈공간만 확보됨.[`red`, `green`, 759, <5 empty items>, `blue`]
for (let idx in color) {
  console.log(`${idx} : ${color[idx]}`);
}

//3개의 크기를 가진 배열을 생성
let point = new Array(3); // ()안의 숫자가 1개일 때 배열의 길이를 뜻함.
console.log(`point lenght: ${point.length}`);

//2개의 요소를 가진 배열을 생성
let shape = new Array(10, 20);
console.log(shape);
for (let idx in shape) {
  console.log(`${idx} : ${shape[idx]}`);
}

shape[2] = 50; //추가
console.log(shape[1]); //요소가져오기
console.log(shape.length); //갯수 조회

/*
 for()
 for ~ in : index
 for ~ of : element
*/

//forEach() : 배열 전용 메소드
//배열.forEach(function(element[, index]){수행할 문장});
//[]는 생략가능표시로 쓰임
shape.forEach(function (element, index) {
  console.log(`${index} : ${element}`);
});

//// Arrow function
shape.forEach((element, index) => {
  console.log(`${index} : ${element}`);
});

let choice = "javascript";
//문자열은 forEach()를 제공하지 않으므로 사용할 수 없다.
//TypeError: choice.forEach is not a function
// choice.forEach(function (element, index) {
//   console.log(`${index} : ${element}`);
// });

//배열.map(callback);
const numbers = [4, 9, 16, 25];
const res = numbers.map(function (element, index) {
  return element * 2;
});

console.log(`res : ${res}`); //res : 8,18,32,50

//Math.sqrt 제곱근을 반환
const sqt = numbers.map(Math.sqrt);
console.log(`sqt : ${sqt}`); //sqt : 2,3,4,5

function getSum(total, num) {
  //total : 누적, num : 요소
  return total + num;
}

//배열의 각 요소에 대해 사용자 제공 "리듀서" 콜백 함수를 순서대로
//실행하고 이전 요소에 대한 계산에서 반환 값을 전달한다.
// /최종 결과는 단일 값
const sum = numbers.reduce(getSum);
console.log(`sum : ${sum}`);

//const sum = numbers.reduce(getSum); 를 풀어쓴 식
// numbers.reduce(getSum){
//     let total=0;
//     for(let i=0; i<numbers.length; i++){
//     total = getSum(total, num);
//     }
//     return total;
// };

//filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
const ages = [32, 33, 16, 40];
const per = ages.filter(function (element, index) {
  return element >= 18;
});

console.log(`per : ${per}`);
