class TicTacToe {
    constructor(turn=1) {
        this.board = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];
        this.winner = 0;
        this.turn = turn;
    }
    changeTurn(){
        this.turn = -1 * this.turn;
    }
    checkAllPosibility(){
        let data = [...this.board];
        
        // ? Check rows
        for(let i=0;i<3;i++){
            this.checkState(data[i][0], data[i][1], data[i][2])
        }

        // ? Check columns
        for(let i=0;i<3;i++){
            this.checkState(data[0][i], data[1][i], data[2][i])
        }

        // ? Check diagonal
        this.checkState(data[0][0], data[1][1], data[2][2]);
        this.checkState(data[0][2], data[1][1], data[2][0]);

    }
    checkState(a,b,c){
        const [isOver, winner] = this.checkSum(a, b, c);
        if(isOver){
            this.turn = 0;
            this.winner = winner;
        }
        
    }
    checkSum(a, b, c){
        let total = a+b+c;
        if(total==3 || total==-3)
            return [true, total/3];
        else
            return [false, 0];
    }
    start() {
        console.log("TicTacToe Started");
    }
    action(event){
        if(this.turn != 0){
            let fill = (this.turn === 1) ? 'O' : 'X';
            this.changeBoard(event.id[1] - 1);
            event.innerHTML = '<h1>'+fill+'</h1>';
            let className = event.className;
            this.checkAllPosibility();
            this.changeTurn();
        }
    }
    changeBoard(id){
        // ? Flatten board and change value from id and turn
        let arr = this.board.flat();
        arr[id] = this.turn;

        // ? Change back to 2D array
        let newArr = [];
        while(arr.length) newArr.push(arr.splice(0,3));

        // ? Assign to board
        this.board = [...newArr];
    }
}