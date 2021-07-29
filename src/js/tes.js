class Tes {
    constructor(){
        this.timer
        this.preTesElem;
        this.startTesElem;
        this.endTesElem;
        this.availableTesChallenge;
        this.skor = 0;
    }
    
    start = () => {
        this.preTesElem = document.getElementById('preTes');
        this.startTesElem = document.getElementById('startTes');
        this.endTesElem = document.getElementById('endTes');

        this.preTesElem.hidden = true;
        this.startTesElem.hidden = false;
        this.endTesElem.hidden = true;
        this.availableTesChallenge  = [...abjadList];
        this.randomNext()
    
        this.countDown("countDownTes");
        this.addKeyupListener();
    }
    end = () => {
        this.preTesElem.hidden = true;
        this.startTesElem.hidden = true;
        this.endTesElem.hidden = false;
        document.getElementById('endSkorTes').innerHTML = this.skor*10;
        this.skor = 0;
    
    }
    restart = () => {
        this.preTesElem.hidden = false;
        this.startTesElem.hidden = true;
        this.endTesElem.hidden = true;
        clearInterval(this.timer);
    }
    
    countDown = (attrId) => {
        // Set the date we're counting down to
        let date = new Date();
        let remainingTime = new Date(date.getTime() + 60*1000)
    
        // Update the count down every 1 second
        this.timer = setInterval(check.bind(this), 100);

        function check() {
    
            // Get today's date and time
            let now = new Date().getTime();
                
            // Find the distance between now and the count down date
            let distance = remainingTime - now;
                
            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"
            document.getElementById(attrId).innerHTML = minutes+":"+seconds;
    
            // Check result predict
            this.checkResult();
            
    
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(this.timer);
                document.getElementById(attrId).innerHTML = "Time Up";
                setTimeout(this.end(), 3000)
            }
        }
    }
    randomNext = () => {
        let challengeTes = document.getElementById('challengeTes');
        if(this.availableTesChallenge.length>1){
            this.shuffle(this.availableTesChallenge)
            challengeTes.innerHTML = this.availableTesChallenge.pop();
        }
        else{
            this.end();
        }
    }
    shuffle = array => {
        array.sort(() => Math.random() - 0.5);
    }
    checkResult = () => {
        let challengeTes = document.getElementById('challengeTes');
        if(challengeTes.innerHTML == predictZero){
            this.addPointTes();
            this.randomNext();
        }
    }
    addPointTes = () => {
        let point = document.getElementById('pointTes')
        this.skor += 1;
        point.innerHTML = this.skor;
    }

    addKeyupListener = () => {
        document.addEventListener('keyup', this.skipFunction.bind(this));
    }
    deleteKeyupListener = () => {
        document.removeEventListener('keyup', this.skipFunction.bind(this));
    }
    skipFunction(e){
        if (e.code === 'Space' && this.startTesElem.hidden == false) {
            this.randomNext()
          }
    }
}