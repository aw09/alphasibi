class TicTacToe {
  constructor(turn = 1) {
    this.board = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    this.winner = 0;
    this.turn = turn;
  }
  start() {
    console.log("TicTacToe Started");
    this.addListener()
    // while(this.winner==0){
    //     setInterval(this.addListener(), 1000);
    // }
  }
  changeTurn() {
    this.turn = -1 * this.turn;
  }
  checkAllPosibility() {
    let data = [...this.board];

    // ? Check rows
    for (let i = 0; i < 3; i++) {
      this.checkState(data[i][0], data[i][1], data[i][2]);
    }

    // ? Check columns
    for (let i = 0; i < 3; i++) {
      this.checkState(data[0][i], data[1][i], data[2][i]);
    }

    // ? Check diagonal
    this.checkState(data[0][0], data[1][1], data[2][2]);
    this.checkState(data[0][2], data[1][1], data[2][0]);
  }
  checkState(a, b, c) {
    const [isOver, winner] = this.checkSum(a, b, c);
    const isDraw = this.checkDraw();
    if (isOver || isDraw) {
      this.turn = 0;
      this.winner = winner;
      this.overState();
    }
  }
  overState(){
    console.log('over');
    let table = document.getElementsByClassName("table-t3");
    for(let i=0;i<table.length;i++){
      let child = table[i].children[0];
      // console.log(child.innerHTML != 'X' && child != 'O');
      if(child.innerHTML != "O" && child.innerHTML != "X" ){
        child.innerHTML = "" ;
      }
    }
    let winner = (this.winner == 1) ? 'O' : 'X';
    this.showAlert("Pemenangnya adalah "+winner, 1000);
  }
  checkDraw(){
    let arr = this.board.flat();
    let filled = 0;
    arr.forEach((e) => {
      if(e!=0)
        filled += 1
    });
    return (filled == arr.length);
  }
  checkSum(a, b, c) {
    let total = a + b + c;
    if (total == 3 || total == -3) return [true, total / 3];
    else return [false, 0];
  }
  addListener() {
    let timer;
    let table = document.getElementsByClassName("table-t3");
    const listener = () => {
      const copyBoard = this.board.flat();
      // document.getElementById("pnum").innerHTML = predictZero;
      for (let i = 0; i < copyBoard.length; i++) {
        if (predictZero == i + 1 && copyBoard[i] == 0) {
          this.action(table[i]);
          this.showAlert("You choose number " + (i + 1), 1000);
        }
      }
    };
    timer = setInterval(listener.bind(this), 1000);
  }
  action(event) {
    if (this.turn != 0) {
      let fill = this.turn === 1 ? "O" : "X";
      this.changeBoard(event.id[1] - 1);
      event.innerHTML = "<h1>" + fill + "</h1>";
      let className = event.className;
      this.checkAllPosibility();
      this.changeTurn();
    }
  }
  changeBoard(id) {
    // * Flatten board and change value from id and turn
    let arr = this.board.flat();
    arr[id] = this.turn;

    // * Change back to 2D array
    let newArr = [];
    while (arr.length) newArr.push(arr.splice(0, 3));

    // * Assign to board
    this.board = [...newArr];
  }
  showAlert(msg, duration) {
    let alert = document.getElementById('alertT3').children[0];
    alert = alert.cloneNode(true);
    let child = alert.children[0];
    console.log(alert)
    child.innerHTML = msg;
    setTimeout(function () {
      alert.parentNode.removeChild(alert);
    }, duration);
    document.body.appendChild(alert);
  }
}
