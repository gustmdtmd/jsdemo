// window.onload = function () {
//   let hNode = document.getElementById("selector");
//   //<h1 id="selector" class="choice">선택자</h1> 자체를 리턴해준다.
//   console.log(hNode);
// };

let hNode = document.getElementById("selector");
//<h1 id="selector" class="choice">선택자</h1> 자체를 리턴해준다.
console.log(hNode, typeof hNode);

let hId = document.querySelector("#selector");
console.log(hId, typeof hId);

let hClass = document.querySelector(".choice");
console.log(hClass, typeof hClass);

//HTMLCollection(4)
let pNode = document.getElementsByTagName("p");
console.log(pNode, typeof pNode);
console.log(pNode.length);
console.log(pNode[0], pNode.item(0));
console.log(pNode[0].innerText);
pNode[0].style.backgroundColor = "blue";
//.js에서 스타일 하는 법

function process() {
  alert("dd");
  let fname = document.frm.fname;
  console.log("fname:", fname);
  console.log(fname.value);
  console.log(fname.defaulValue);

  //[object HTMLInputElement] 가져온 타입
  //document.write(fname);
  return false;
}
