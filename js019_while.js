//js019_while.js

/*
  while(조건식){
      실행문;
  }
*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log(`==========================================`);

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

/*
while문은 조건식 생략이 불가능하다.
while(){
  console.log(`test`)
}
*/

/*
do~while문 꼭한번은 실행함.
do{
    실행문;
}while(조건식);
*/

do {
  console.log(`고객님 주문하시겠습니까?(y/n)`);
  input = prompt(`입력`);
} while (input == `y`);
