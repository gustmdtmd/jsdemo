let dd = true;
let btn = document.getElementsByTagName(`button`)[0];
btn.onclick = process;
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth();
let date = today.getDate();
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let pNode = `${year}-${month + 1}-${date}  ${hours}:${minutes}:${seconds}`;

function process() {
  document.getElementById(`now`).innerHTML = pNode;
}
