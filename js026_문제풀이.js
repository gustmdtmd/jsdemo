//js026_문제풀이js

/*
 문제1
 <프로그램 실행결과>
  주어진 배열에서 3의 배수의 개수=> 6
  주어진 배열에서 3의 배수의 합=> 108
  */
let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];
console.log(`[프로그램 실행결과]`);
console.log(`3의배수=> ${process(arr)}`);
console.log(`주어진 배열에서 3의 배수의 개수=> ${count(arr)}`);
console.log(`주어진 배열에서 3의 배수의 합=> ${arrPlus(arr)}`);

//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의

function process(arr) {
  let process = ``;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) process += arr[i] + ` `;
  }
  return process;
}
//주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의
function count(process) {
  let count = 0;
  for (let i = 0; i < process.length; i++) {
    if (process[i] % 3 == 0) count++;
  }
  return count;
}

//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
function arrPlus(process) {
  let arrPlus = 0;
  for (let i = 0; i < process.length; i++) {
    if (process[i] % 3 == 0) {
      arrPlus += process[i];
    }
  }
  return arrPlus;
}

/*
  [문제2]
  [출력결과]
  javascript
  tpircsavaj
  javascript
  */

let alpa = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];
console.log(`[출력결과]`);
console.log(`${reverse(alpa)}`);
console.log(`${display(alpa)}`);

//alpa배열의 요소를 reverse한 후 리턴하는 함수 정의
function reverse(alpa) {
  let reverse = ``;
  for (let i = alpa.length - 1; i >= 0; i--) {
    reverse += alpa[i];
  }
  return reverse;
}

//data배열의 출력하는 함수 정의
function display(data) {
  let display = ``;
  for (let i = 0; i < data.length; i++) {
    display += data[i];
  }
  return display;
}
