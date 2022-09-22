//js026_문제풀이js

/*
 문제1
 <프로그램 실행결과>
  주어진 배열에서 3의 배수의 개수=> 6
  주어진 배열에서 3의 배수의 합=> 108
  */
//  let a=[];
//  a[0]=10;
//  a[1]=20;
//  a[3]=30;

let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];

//주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의

function process1(arr) {
  let data = [];
  // console.log(process.length);{
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
      data[data.length] = arr[i];
    }
  }
  return data;
}

//주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의
function count(process) {
  return process.length;
}

//주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
function arrPlus(process) {
  let sum = 0;
  for (let i = 0; i < process.length; i++) {
    sum += process[i];
  }
  return sum;
}

//console.log(process(arr));

let result = process1(arr);
console.log(count(process1(result)));
console.log(arrPlus(process1(result)));

/*
  [문제2]
  [출력결과]
  javascript
  tpircsavaj
  javascript
  */

let alpa = ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"];

//alpa배열의 요소를 reverse한 후 리턴하는 함수 정의
function reverse(alpa) {
  let data = [];
  for (let i = alpa.length - 1; i >= 0; i--) {
    data[data.length] = alpa[i];
  }
  return data;
}

//data배열의 출력하는 함수 정의
function display(data) {
  for (let i = 0; i < data.length; i++) process.stdout.write(data[i]);
  process.stdout.write(`\n`);
}

display(alpa);
display(reverse(alpa));
display(alpa);
