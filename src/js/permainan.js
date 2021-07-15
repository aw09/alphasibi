// var gbk = new GuntingBatuKertas();
// var t3 = new TicTacToe();
// const permainanGuntingBatuKertas = () => {
//   this.hideAllPermainan();
//   document.getElementById('guntingBatuKertas').hidden = false;
//   gbk.start();
// }
// const permainanTicTacToe = () => {
//   this.hideAllPermainan();
//   document.getElementById('tictactoe').hidden = false;
//   opensibi.changeMode('number');
//   t3.start();
// }
// const this.hideAllPermainan = () => {
//   let container = document.getElementById('permainan-content');
//   let children = container.children;
//   for (let item of children) {
//     item.hidden = true;
//   }
// }
// const showMenuPermainan = () => {
//   this.hideAllPermainan();
//   document.getElementById('menuGBK').hidden = false;
//   document.getElementById('menuT3').hidden = false;
// }

class Permainan {
  constructor(){
    this.gbk = new GuntingBatuKertas();
    this.t3 = new TicTacToe();
  }
  permainanGuntingBatuKertas = () => {
    this.hideAllPermainan();
    document.getElementById('guntingBatuKertas').hidden = false;
    this.gbk.start();
  }
  permainanTicTacToe = () => {
    this.hideAllPermainan();
    document.getElementById('tictactoe').hidden = false;
    opensibi.changeMode('number');
    this.t3.start();
  }
  hideAllPermainan = () => {
    let container = document.getElementById('permainan-content');
    let children = container.children;
    for (let item of children) {
      item.hidden = true;
    }
  }
  showMenuPermainan = () => {
    this.hideAllPermainan();
    document.getElementById('menuGBK').hidden = false;
    document.getElementById('menuT3').hidden = false;
  }
}
