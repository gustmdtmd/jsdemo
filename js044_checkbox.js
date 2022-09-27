//약관 동의
document.frm.onsubmit = () => {
  let admin = document.frm.admin;
  if (!admin.checked) {
    alert(`약관에 동의해야 합니다.`);
    return false;
  }
};

//전체 선택
document.frm.allCheck.onclick = function () {
  //console.log(this.checked); true or false
  //각각의 checked에 allCheck.checked를 넣어줌.
  //document.frm.subject1.checked = this.checked;
  //document.frm.subject2.checked = this.checked;
  //document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(`.checkgroup`);
  console.log(checkgroup.length); //3

  //this는 자기 자신을 가르키지만 위치에 따라 달라지므로 확인이 필요하다.
  /*
  //Arrow Function : this는 상위객체인 document.frm.allCheck를 의미함.
  checkgroup.forEach((element) => {
    //<input type="checkbox" name="allCheck" id="allCheck" />
    //console.log(this);
    element.checked = this.checked;
  });
*/

  let myThis = this; //document.frm.allCheck

  /*
  //Anonymous Function : this는 window 객체를 의미함
  checkgroup.forEach(function (element) {
    //console.log(this);
    element.checked = myThis.checked;
  });
  */
  ////////////////////////////////////////////////////////
  //Array.form( ) : NodeList를 Array로 변경
  /*
  console.log(`${checkgroup}`);

  let myArray = Array.from(checkgroup); 얕은 복사
  console.log(`${myArray}`);

  //map은 배열에서만 사용가능하기때문에 배열로 변경해준뒤 사용함.
  myArray.map(function (element) {
    //console.log(this);
    //각각의 checked에 allCheck.checked를 넣어줌.
    element.checked = myThis.checked;
  }); */

  /////////////////////////////////////////////////////////////////////
  //ES6 Spread Operator : NodeList를 Array로 변경
  let iArray = [...checkgroup]; //깊은 복사
  iArray.map(function (element) {
    //console.log(this);
    //각각의 checked에 allCheck.checked를 넣어줌.
    element.checked = myThis.checked;
  });
};
