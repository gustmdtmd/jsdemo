document.querySelector(`.red`).onclick = (e) => {
  alert(`red`);
};

document.querySelector(`.green`).onclick = (e) => {
  alert(`green`);
  //버블링 제한
  e.stopPropagation();
};

document.querySelector(`.blue`).onclick = (e) => {
  alert(`blue`);
  console.log(e);
  //버블링 제한
  e.stopPropagation();
  //return false; stopPropagation() 대신에 사용 불가능
};

document.querySelector(`a`).onclick = (e) => {
  alert(`안녕하세요`);
  //페이지 이동 차단
  e.preventDefault();
  //return false;   preventDefault() 대신에 사용가능
};

/*

[1] Event Propagation(이벤트 전파)
① 캡처링(capturing phase) : 부모요소에서 Target요소로 이벤트 전파
② 버블링(bubbling phase) : Target요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
 stopPropagation()

[3] stopPropagtion()와 prevenDefault()비교
 stopPropagtion() : 이벤트 전파 차단 return false(jQurey)
 prevenDefault() : 디폴트 이벤트 차단 return false(javascript, jQurey)

*/
