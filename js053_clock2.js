function leftPad(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

function setText(selector, text) {
  let targetElement = document.querySelector(selector);
  targetElement.innerText = text;
}

let watchTime = () => {
  const now = new Date();
  const dayList = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];

  const hour = leftPad(now.getHours());
  const minute = leftPad(now.getMinutes());
  const second = now.getSeconds();
  const year = now.getFullYear();
  const month = leftPad(now.getMonth() + 1);
  const date = leftPad(now.getDate());
  const day = now.getDay();

  setText(`#hours`, hour);
  setText(`#minute`, minute);
  setText(`#second`, second);
  setText(`#year`, year);
  setText(`#month`, month);
  setText(`#date`, date);
  setText(`#day`, `(${dayList[day]})`);
};

watchTime();

//1000이 1초
let clockInterval = setInterval(watchTime, 1000);
