let btn = document.getElementsByTagName(`button`)[0];
btn.onclick = process;

function process() {
  let pNode = document.getElementsByTagName(`p`)[0];
  pNode.date = new Date();
}
