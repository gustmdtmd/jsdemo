//js031_array.js

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango' ]
console.log(`${typeof fruits}`); //object
let data = fruits.toString(); // 타입을 string으로 변경
console.log(`${data}`); //Banana,Orange,Apple,Mango
console.log(`${typeof data}`); //string

//join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
console.log(typeof fruits.join()); //string
console.log(fruits.join()); //Banana,Orange,Apple,Mango
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango
console.log(fruits.join("_")); //Banana_Orange_Apple_Mango

//배열의 끝에 요소 추가
fruits[4] = "kiwi";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]
//push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고,
//배열의 새로운 길이를 반환한다.
console.log(fruits.push("Melon")); //6
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi', 'Melon' ]

//배열의 끝에 요소 제거
//pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
console.log(fruits.pop()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//배열의 앞에 요소 추가
//unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고,
//새로운 길이를 반환한다.
console.log(fruits.unshift("Melon")); //6
console.log(fruits); //[ 'Melon', 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//배열의 앞에 요소 제거
//shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.
//이 메서드는 배열의 길이를 변하게 합니다.
console.log(fruits.shift()); //Melon
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//배열 중간의 요소 제거(자리 확보하고 있음)
//delete 연산자는 객체의 속성을 제거한다.
//제거한 객체의 참조를 어디에서도 사용하지 않는다면 나중에 자원을 회수한다.
delete fruits[3];
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', <1 empty item>, 'kiwi' ]

//delete연산자로 제거한 자리에 다시 넣음.
fruits[3] = "Mango";
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]

//slice()** **메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한
//얕은 복사본을 새로운 배열 객체로 반환한다.
//원본 배열은 바뀌지 않는다.
//특정 범위 요소를 가져옴
console.log(fruits.slice(1, 3)); //[ 'Orange', 'Apple' ]
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'kiwi' ]
console.log(fruits.slice(-4, -2)); //[ 'Orange', 'Apple' ]
console.log(fruits.slice(1)); //[ 'Orange', 'Apple', 'Mango', 'kiwi' ]

//오름차순 정렬
//sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
//원본 배열이 바뀐다.
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Mango', 'Orange', 'kiwi' ]
console.log(fruits);

//내림차순 정렬
//내림차순 정렬을 하는 메서드는 없다.
//reverse() 메서드는 배열의 순서를 반전한다.
//첫 번째 요소는 마지막 요소가 되며 마지막 요소는 첫 번째 요소가 된다.
console.log(fruits.sort().reverse()); //[ 'kiwi', 'Orange', 'Mango', 'Banana', 'Apple' ]

//javascript에서 sort()는 Tim Sort 알고리즘을 사용한다.
//Tim Sort는 Insertion Sort와 Merge Sort을 결합하여 만든 정렬이다.
//Tim Sort 알고리즘 : http://d2.naver.com/helloworld/0315536
//숫자 오름차순 정렬 오류
// ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음
let point = [40, 100, 1, 5, 10];
console.log(point.sort()); //[ 1, 10, 100, 40, 5 ]
console.log(point); //[ 1, 10, 100, 40, 5 ]

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
//sort(function(a,b))
//retrun a-b;
//오름차순
//[ 1, 5, 10, 40, 100 ]
console.log(
  point.sort(function (a, b) {
    console.log(`a:${a}, b:${b}, a-b:${a - b}`);
    return a - b;
  })
);

//내림차순
//[ 100, 40, 10, 5, 1 ]
console.log(
  point.sort(function (a, b) {
    return b - a;
  })
);

//여러 배열 결합 concat
let xData = [1, 2, 3];
let yData = [4, 5, 6];
let zData = xData.concat(yData, [7, 8, 9]);
console.log(zData.length); //9
console.log(zData); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

//flat() 메서드는 모든 하위 배열 요소를
//지정한 깊이까지 재귀적으로 이어붙인 새로운 배열을 생성한다.
//flat 메서드는 배열의 구멍도 제거한다.
let arr2 = [1, 3, [[[4, 5]]], [7, 8], [9, 10], 12];
console.log(arr2); //[ 1, 3, [ [ [Array] ] ], [ 7, 8 ], [ 9, 10 ], 12 ]
//flat()= flat(1)
console.log(arr2.flat()); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, 9, 10, 12 ]
console.log(arr2.flat(1)); //[ 1, 3, [ [ 4, 5 ] ], 7, 8, 9, 10, 12 ]
console.log(arr2.flat(2)); //[ 1, 3, [ 4, 5 ], 7, 8, 9, 10, 12 ]
console.log(arr2.flat(3)); //[ 1, 3,  4,  5, 7, 8, 9, 10, 12 ]
