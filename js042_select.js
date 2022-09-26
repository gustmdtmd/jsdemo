document.frm.onsubmit = () => {
  let optFruit = document.frm.fruit;
  console.log(optFruit);

  let optSelect = optFruit.selectedIndex + ` ` + optFruit.value;
  console.log(`${optSelect}`);

  return false;
  //서버에 요청하는것을 끊음
  //브라우저에 나옴.
};
