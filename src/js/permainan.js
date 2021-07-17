class Permainan {
  constructor(){
    this.gbk = new GuntingBatuKertas();
    this.t3 = new TicTacToe();
    this.back;
  }
  start(){
    this.back = document.getElementById('kembaliMenuPermainan');
  }
  permainanGuntingBatuKertas = () => {
    this.hideAllPermainan();
    this.back.hidden = false
    document.getElementById('guntingBatuKertas').hidden = false;
    this.gbk.start();
  }
  permainanTicTacToe = () => {
    this.hideAllPermainan();
    this.back.hidden = false
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
    this.back.hidden = true;
  }
  showMenu = () => {
    this.hideAllPermainan();
    document.getElementById('menuGBK').hidden = false;
    document.getElementById('menuT3').hidden = false;
  }
}
