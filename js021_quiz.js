/*
[문제1]
  num변수의 값이 10의 배수이면 1을 아니면 0을 
   리턴하는 프로그램을 구현하시오.
  [실행결과]
   1
 */

//if문보다 조건연산자를 이용하는게 더 간결하다.
// let num = 10;
// if문 이용
// if (num % 10 == 0) {
//   console.log(`[실행결과]
//   1`);
// } else {
//   console.log(`[실행결과]
//   0`);
// }

//조건연산자 이용
console.log(`[출력결과]`);
let num = 10;
let bit = num % 10 == 0 ? 1 : 0;
console.log(bit);

console.log(`==========================================`);
/*
     [문제2]
   1  사과를 담는데 필요한 바구니의 수를 구하는 코드이다. 
   2  만일 사과의 수가 123개이고 하나의 바구니에는 10개의 사과를 담을 수 있다면,
      13개의 바구니가 필요하다
      
   3  [실행결과]
       필요한 바구니의 수 : 13
    */
let apple = 128, //사과의 수
  basket = 10, //하나의 바구니에 담는 사과수
  numOfBasket; //필요한 바구니 수
numOfBasket = parseInt(apple / basket) + (apple % basket > 0 ? 1 : 0);
//numOfBasket =
//    apple % basket == 0
//    ? parseInt(apple / basket)
//    : parseInt(apple / basket)+1

console.log(`[출력결과]`);
console.log(`필요한 바구니의 수 : ${numOfBasket}`);

console.log(`==========================================`);

/*
     [문제3]
     switch~case문을 이용해서 차량5부제 프로그램을 구현하시오.
     
     1. 차량의 끝번호가 아래에 해당하면 해당 요일은 차량운행을 제한한다.
     
        1,6 = 월요일
        2,7 = 화요일
        3,8 = 수요일
        4,9 = 목요일
        5,0 = 금요일
        
     2. 출력결과
            차량번호의 끝자리가 5인 차량은 금요일 운행을 제한합니다.
     
    */
let carNumber = 5;
let day = "";
switch (carNumber % 10) {
  case 1:
  case 6:
    day = `월요일`;
    break;
  case 2:
  case 7:
    day = `화요일`;
    break;
  case 3:
  case 8:
    day = `수요일`;
    break;
  case 4:
  case 9:
    day = `목요일`;
    break;
  case 5:
  case 0:
    day = `금요일`;
}
console.log(`[출력결과]`);
console.log(
  `차량번호의 끝자리가 ${carNumber}인 차량은 ${day} 운행을 제한합니다.`
);

console.log(`==========================================`);

/*
    [문제4] 
     2001부터 2012년사이에서 윤년을 구하시오.
     윤년의 조건
     1) 년도를 4로 나눈 나머지가 0이고 100로 나눈 나머지가 0이 아니다.
     2) 년도를 400로 나눈 나머지가 0이다.
    * 
     [출력결과]
      2004
     2008
     2012
    */
// year%4 == 0  && year%100 != 0
// year%400 == 0

console.log(`[출력결과]`);
//let year = 2012;
for (let year = 2001; year <= 2012; year++) {
  let leapYearCheck = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
  // let yearDate = leapYearCheck ? `윤년` : `평년`;
  if (leapYearCheck) {
    console.log(`${year}`);
  }
}
// for (let year = 2001; year <= 2012; year++) {
//   if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//     console.log(`${year}`);
//   }
// }
console.log(`==========================================`);

/*  
    [문제5]
    * 1 10=2x+3y의 해를 구하시오.
    *   x와y의 범위 : 0<=x<=10,  0<=y<=10
    *   
    * 2 출력결과
    *  x=2, y=2
    *  x=5, y=0
    */

console.log(`[출력결과]`);
for (let x = 0; x <= 10; x++) {
  for (let y = 0; y <= 10; y++) {
    if (10 == 2 * x + 3 * y) {
      console.log(`x=${x}, y=${y}`);
    }
  }
}
