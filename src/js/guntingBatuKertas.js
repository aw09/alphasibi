class GuntingBatuKertas {
    constructor() {
        this.startPage = null;
        this.resultPage = null;
        this.option = null;
        this.userChoice = '';
    }
    start() {
        console.log("GBK Started");
        this.getPage();
        let random = this.generateRandomAbjad();
        this.changePage(random);
        this.addListener(random);
    }
    restart(){
        this.showStartPage();
        this.start()
    }
    getPage() {
        this.startPage = document.getElementById("startGuntingBatuKertas");
        this.resultPage = document.getElementById("resultGuntingBatuKertas");
        this.option = document.getElementsByClassName("optionGuntingBatuKertas");
    }
    showResultPage() {
        this.startPage.hidden = true;
        this.resultPage.hidden = false;
        let choice = ['scissors', 'rock', 'paper'];
        let user = this.userChoice;
        let computer = Math.floor(Math.random() * 3)
        document.getElementById('userImageGBK').src = "./src/images/"+choice[user]+".png";
        document.getElementById('computerImageGBK').src = "./src/images/"+choice[computer]+".png";
        let resultWinner = document.getElementById('resultGBK');
        let result;
        if(user==computer)
            result = "Draw";
        else if(user==0 && computer==2 || user==1 && computer==0 || user==2 && computer==1)
            result = "You Win !";
        else
            result = "You Lose !";
        resultWinner.innerHTML = result;
    }
    showStartPage() {
        this.startPage.hidden = false;
        this.resultPage.hidden = true;
    }
    changePage(random) {
        let numOption = this.option.length;

        for (let i = 0; i < numOption; i++) {
            const label = this.option[i].children[1];
            label.innerHTML = random[i];
        }
    }
    addListener(random) {
        let timer;
        const listener = () => {
            for (let i = 0; i < random.length; i++) {
                if (predictZero == random[i]) {
                    this.userChoice = i;
                    this.showResultPage();
                    clearInterval(timer);
                }
            }
        }
        timer = setInterval(listener.bind(this), 500);

    }
    generateRandomAbjad() {
        let randomAbjad = [...abjadList];
        this.shuffle(randomAbjad);
        randomAbjad = randomAbjad.slice(0, this.option.length);
        return randomAbjad;
    }

}
