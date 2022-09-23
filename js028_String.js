//js028_String.js

let data = "It`s alright";
console.log(data);

//lenght : 문자열의 길이
console.log(data.length);

/*
  특정 범위 데이터를 리턴해주는 3가지 메소드
  1. substring(start, end); (포함, 미만)
  2. substr(start, lenght); (위치값, 길이)
  3. slice(start, end);
*/

data = "Apple, Banana, Kiwi";
console.log(`substring: ${data.substring(7, 13)}`); // substring: Banana7인덱스부터 13인덱스 미만
//substring은 음수값은 지원하지 않는다.
console.log(`substring: ${data.substring(-12, -6)}`); // substring:

console.log(`substr: ${data.substr(7, 6)}`); // substr: Banana
console.log(`substr: ${data.substr(-12, 6)}`); //substr: Banana

console.log(`slice: ${data.slice(7, 13)}`); //slice: Banana
console.log(`slice: ${data.slice(-12, -6)}`); //slice: Banana

//replace(`찾을 문자열|RegExp`, `바꿀 문자열`)
// i: 대소문자 구분없음, g: 모든 문자열, gi: 대소문자 구분없이 모든 문자열
console.log(`replace: ${data.replace(`Banana`, `Grape`)}`);

console.log(data); //Apple, Banana, Kiwi

//정규표현식(/찾을문자열/, 변경할문자열)
data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/, `red`));
//찾을문자열과 같은 맨 앞 문자열 변경 / Mr Blue has a red house and a blue car

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/g, `red`));
//찾을문자열과 모두 같은 문자열 변경 / Mr Blue has a red house and a red car

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/i, `red`));
//대소문자 구분없이 맨 앞에 문자열 변경 / Mr red has a blue house and a blue car

data = "Mr Blue has a blue house and a blue car";
console.log(data.replace(/blue/gi, `red`));
//대소문자 구분없이 찾을 문자열과 모두같은 문자열 변경 / Mr red has a red house and a red car

console.log(data); //불변 Mr Blue has a blue house and a blue car

data = "Hello World";
//모두 대문자로 출력 HELLO WORLD
console.log(`toUpperCase(): ${data.toUpperCase()}`);

//모두 소문자로 출력 hello world
console.log(`toLowerCase(): ${data.toLowerCase()}`);

let data2 = "javascript";
//concat: 문자열 연결 Hello Worldjavascript
console.log(`concat(): ${data.concat(data2)}`);
//" ", 공백 Hello World javascript
console.log(`concat(): ${data.concat(" ", data2)}`);
//"_", 언더바 Hello World_javascript
console.log(`concat(): ${data.concat("_", data2)}`);

//H
console.log(`charAt(): ${data.charAt(0)}`);
//72 유니코드값 charCodeAt
console.log(`charAt(): ${data.charCodeAt(0)}`);

data = `a,b,c,d,e`;
//split() : 문자열을 나누어 준다.
let arr = data.split(`,`);
for (let i of arr) console.log(i);

//match() : 검색데이터와 일치하는 문자열이 있으면 문자열 모두를 찾아서 배열로 리턴하고
//          일치하는 문자열이 없으면 null로 리턴한다.
data = "Mr Blue has a blue house and a blue car";
let res = data.match(/blue/g);
//match(): blue,blue object true
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

res = data.match(/red/g);
//match(): null object false
console.log(`match(): ${res} ${typeof res} ${res instanceof Array}`);

//search() : 검색데이와 일치하는 문자열이 있다면 처음의 index를 리턴하고
//           일치하는 문자열이 없으면 -1을 리턴한다,

res = data.search(/blue/g);
//14
console.log(`search: ${res}`);

res = data.search(/red/g);
//-1 찾는 문자열이 없을 때
console.log(`search: ${res}`);

//indexOf() : 문자열의 인덱스를 리턴

data = "Mr Blue has a blue house and a blue car";
//0
console.log(data.indexOf("M"));
//3
console.log(data.indexOf("B"));

let position = data.indexOf("blue");
//31 다음 bule를 가지고 온다.
console.log(data.indexOf("blue", position + 1));

data = "Mr Blue has a blue house and a blue car";
let pos = -1;
do {
  pos = pos + 1;
  pos = data.indexOf("blue", pos);
  if (pos != -1) console.log(pos);
} while (pos != -1);

data = "Mr Blue has a blue house and a blue car";

for (let i = 0; i < data.length; i += 1) {
  i = data.indexOf("blue", i);
  if (i == -1) break;
  console.log(i);
}
// for (let i = 0; i < data.length; i++) {
//   let pos2 = data.indexOf("blue", i);
//   if (pos2 == i) {
//     console.log(pos2);
//   }
// }

//repeat() : 글자 반복
let text = "korea";
console.log(text.repeat(10));

text = "*";
console.log(text.repeat(10));

let text2 = "  korea   data ";
//15
console.log(text2.length);
//12 trim() : 공백을 지움, 문자 사이에 있는 건 제외
console.log(text2.trim().length);
