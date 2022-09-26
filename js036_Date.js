//js036_Date.js

let date = new Date();
//2022-09-26T01:09:45.B62Z
//현재 날짜와 시간을 나타내는 문자열을 반환
console.log(date);

console.log(date.getFullYear()); //년도 2022
console.log(date.getMonth()); //전월을 알려줌 8
console.log(date.getMonth() + 1); //당월 9
console.log(date.getDate()); //일 26
console.log(date.getDay()); //요일 1
//0일 1월 2화 3수 4목 5금 6토
