//<script defer src="js041_submit2.js"></script>
//<input type="button" value="login" id="btn" />

let btn = document.querySelector(`#btn`);
btn.onclick = () => {
  let idNode = document.querySelector(`#my_id`);
  let passNode = document.querySelector(`#my_pass`);

  if (idNode.value == ``) {
    alert(`아이디를 입력하세요`);
    return false;
  }

  if (passNode.value == ``) {
    alert(`비밀번호를 입력하세요`);
    return false;
  }

  //페이지를 여러개 줘야할때 action="#"을 없애고 밑에 식을 추가해준다.
  //document.log_f.action = "js041_submit.html";

  //강제로 submit() 이벤트 발생시킨다.
  document.log_f.submit();
};
