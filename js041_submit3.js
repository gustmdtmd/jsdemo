//<script defer src="js041_submit3.js"></script>
//<button value="login">login</button>

document.log_f.onsubmit = () => {
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
};
