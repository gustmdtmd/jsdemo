let myNode = document.getElementById("p2");

//parentNode
let ptNode = myNode.parentNode;
//<div id="wrap">...</div>
console.log(ptNode);

//parentNode:[object HTMLDivElement]
console.log(`parentNode:${ptNode}`);
ptNode.style.color = "blue";

///////////////////////////////////////
//previousSibling
//인터페이스의 읽기 전용 previousSibling속성은
//부모 목록 Node에서 지정된 노드 바로 앞의 노드를 반환하거나
//지정된 노드가 해당목록의 첫 번째 노드인 경우 반환합니다.

let prevNode = myNode.previousSibling;
//prevNode:[object Text]
console.log(`prevNode:${prevNode}`);

prevNode = prevNode.previousSibling;
//prevNode:[object HTMLParagraphElement]
console.log(`prevNode:${prevNode}`);
//content1
console.log(prevNode.innerText);
//innerText 속성은 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타낸다.

////////////////////////////////////////////////////////////////////////
//nextSibling
//Node.nextSibling 은 부모의 childNodes 목록에서
//지정된 노드 바로 다음에 있는 노드를 반환하거나
//지정된 노드가 해당 목록의 마지막 노드이면 null 값을 반환한다.

let nextNode = myNode.nextSibling;
//nextNode:[object Text]
console.log(`nextNode:${nextNode}`);

nextNode = nextNode.nextSibling;
//nextNode:[object HTMLParagraphElement], content3
console.log(`nextNode:${nextNode}, ${nextNode.innerText}`);

///////////////////////////////////////////////////////////////////////
//previousElementSibling
//읽기 전용 속성은 부모의 자식 목록에서 지정된 요소 바로 앞의 항목을 반환 하거나
//Element지정된 null요소가 목록의 첫 번째 요소인 경우 반환합니다.

let prevEleNode = myNode.previousElementSibling;
//prevEleNode:[object HTMLParagraphElement], content1
console.log(`prevEleNode:${prevEleNode}, ${prevEleNode.innerText}`);

///////////////////////////////////////////////////////////////////////
//nextElementSibling
//부모의 자식 목록에서 지정된 요소 바로 다음에 오는 요소를 반환하거나
//null지정된 요소가 목록의 마지막 요소인 경우 반환합니다

let nextEleNode = myNode.nextElementSibling;
//nextEleNode:[object HTMLParagraphElement], content3
console.log(`nextEleNode:${nextEleNode}, ${nextEleNode.innerText}`);

///////////////////////////////////////////////////////////////////////
//childNodes

let divNode = document.getElementById(`wrap`);
//divNode:[object HTMLDivElement]
console.log(`divNode:${divNode}`);

let divChildesNode = divNode.childNodes;
//divChildNode:[object NodeList]
console.log(`divChildesNode:${divChildesNode}`);
//NodeList(7) [text, p#p1, text, p#p2, text, p#p3, text]
console.log(divChildesNode);

///////////////////////////////////////////////////////////////////////
//children

let divChildren = divNode.children;
//divChildren:[object HTMLCollection]
console.log(`divChildren:${divChildren}`);
console.log(`----`);
//HTMLCollection(3) [p#p1, p#p2, p#p3, p1: p#p1, p2: p#p2, p3: p#p3]
console.log(divChildren);

//<p id="p1">content1</p>
console.log(divChildren[0]);
console.log(divChildren.item(0));
console.log(divChildren.namedItem(`p1`));

//firstChild, firstElementChild
let pNode = document.getElementById(`p4`);
let aNode = pNode.firstChild;
//#text
console.log(aNode);

aNode = pNode.firstElementChild;
// <img src="images/gosu.jpg" alt="영화배우 고수" />
console.log(aNode);

////////////////////////////////////////////////////
//getAttribute("속성명"), setAttribute("속성명","값")
//객체.속성명, 객처.속성명="값"

let aAttrNode = aNode.getAttribute(`src`);
//images/gosu.jpg
console.log(aAttrNode);

aAttrNode = aNode.src;
//http://127.0.0.1:5500/images/gosu.jpg
console.log(aAttrNode);

aNode.setAttribute(`title`, `스타배우`);
console.log(aNode.getAttribute(`title`));

aNode.id = "imgGosu";
console.log(aNode.id);
