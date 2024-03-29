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
  const present = new Date();
  const dayList = [`일`, `월`, `화`, `수`, `목`, `금`, `토`];

  const hour = leftPad(present.getHours());
  const minute = leftPad(present.getMinutes());
  const second = leftPad(present.getSeconds());
  console.log(`${hour}-${minute}-${second}`);

  setText(`#hours`, hour);
  setText(`#minute`, minute);
  setText(`#second`, second);

  const year = present.getFullYear();
  const month = leftPad(present.getMonth() + 1);
  const date = leftPad(present.getDate());
  const day = present.getDay();

  console.log(`${year}-${month}-${date}-${day}`);

  setText(`#year`, year);
  setText(`#month`, month);
  setText(`#date`, date);
  setText(`#day`, `(${dayList[day]})`);
};

watchTime();

let clockInterval = setInterval(watchTime, 1000);

/*
 setTimeout(실행함수, 시간) : 일정한 시간이 지난후 한번만 실행함
 setInterval(실행함수, 시간) : 일정 시간 간격을 두고 반복 실행함
 */
