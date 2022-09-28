let btn = document.querySelector(`button`);

console.log(`start`);
btn.addEventListener(
  `click`,
  function () {
    console.log(`addEventLitener`);
  } /* 콜백함수 */,
  false
);

console.log(`end`);
