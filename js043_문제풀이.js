let btn = document.getElementsByTagName(`button`)[0];
btn.onclick = () => {
  let pNode = document.getElementsByTagName(`p`)[0];

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  pNode.innerText = `${year}-${month}-${date}  ${hours}:${minutes}:${seconds}`;
};
