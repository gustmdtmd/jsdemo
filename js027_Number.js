//js027_Number.js

let data = 10;
let fData = Number(data); //값을 숫자로 변경하기위한
let nObj = new Number(data); //객체 생성
console.log(`data=${typeof data}`); //number
console.log(`fDate=${typeof fData}`); //number
console.log(`nObj=${typeof nObj}`); //object - 객체로서 사용됨

//toString() : number -> string
console.log(typeof nObj.toString); //function .toString의 타입
console.log(typeof nObj.toString()); //string
//자바스크립트에서만 원시형에 .을 붙이면 객체를 생성해준다.
console.log(typeof data.toString()); //string

console.log(data + fData); //number + number = 20
console.log(data + nObj); //number + number = 20

//valueOf() : Number -> number
//object -> primitive
//number 원래 객체상태로는 더할수없으나 자바스크립트 자체에서
//.valueOf()을 자동으로 사용하여 더할수있게된다.
console.log(typeof nObj.valueOf());
console.log(typeof new String(`javascript`)); //object
console.log(typeof new String(`javascript`).valueOf()); //string

console.log(parseInt(`10`)); //10

//let val =10;
//let val = `10.3`;
//let val = `A`;
//let val = `10A`;   숫자가 앞에 있으면 parseInt(), parseFloat()은 계산이 된다.
let val = `A10`; //숫자가 뒤에 있으면 모두 계산이 안된다.
console.log(val + val); //1010 10.310.3  AA 10A10A 문자+문자

//숫자로 변경해줌. Number(), parseInt(), parseFloat()
//Number(), parseFloat() 은 실수값
//parseInt() 은 정수값
console.log(Number(val) + Number(val)); //20 20.6 NaN NaN NaN
console.log(parseInt(val) + parseInt(val)); //20 20   NaN 20  NaN
console.log(parseFloat(val) + parseFloat(val)); //20 20.6 NaN 20  NaN

console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NaN); //NaN
