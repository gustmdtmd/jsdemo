//js022_for_in.js

let color = [`red`, `green`, `blue`];
console.log(color[0]); //red
console.log(color[1]); //green
console.log(color[2]); //blue
console.log(color[3]); //undefined

//length : 요소의 개수 리턴
console.log(color.length); //3

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}

//배열에 `black`요소 추가 가능 (javascript에서만 가능.)
color[3] = `black`;
console.log(color.length); //4

for (let index = 0; index < color.length; index++) {
  console.log(color[index]);
}

//객체 리터널 : {property:value, property:value}
//java : element를 가져옴. for(String element : city){}
//javascript : index를 가져옴.
let city = [`서울`, `부산`, `대전`];
for (let idx in city) {
  console.log(idx); //0,1,2
  console.log(city[idx]); //서울,부산,대전
}

let obj = { a: 1, b: 2, c: 3 };
console.log(obj); //{ a: 1, b: 2, c: 3 }

console.log(obj.a); //1
console.log(obj.b); //2
console.log(obj.c); //3

for (let prop in obj) {
  // console.log(prop); a
  // console.log(obj[prop]); 오류
  console.log(`${prop}:${obj[prop]}`); //a:1
  //console.log(`${prop}:${obj.prop}`);//a:undefined
}
