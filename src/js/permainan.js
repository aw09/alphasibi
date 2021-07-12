var gbk = new GuntingBatuKertas();
var t3 = new TicTacToe();
const permainanGuntingBatuKertas = () => {
  hideAllPermainan();
  document.getElementById('guntingBatuKertas').hidden = false;
  gbk.start();
}
const permainanTicTacToe = () => {
  hideAllPermainan();
  document.getElementById('tictactoe').hidden = false;
  t3.start();
}
const hideAllPermainan = () => {
  let container = document.getElementById('permainan-content');
  let children = container.children;
  for (let item of children) {
    item.hidden = true;
  }
}
const showMenuPermainan = () => {
  hideAllPermainan();
  document.getElementById('menuGBK').hidden = false;
  document.getElementById('menuT3').hidden = false;
}


