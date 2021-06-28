var timer
var preTesElem = document.getElementById('preTes');
var startTesElem = document.getElementById('startTes');
var endTesElem = document.getElementById('endTes');
var availableTesChallenge;
const startTes = () => {
    preTesElem.hidden = true;
    startTesElem.hidden = false;
    endTesElem.hidden = true;
    const list = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    availableTesChallenge  = [...list];
    randomNext()


    countDown("countDownTes");
}
const endTes = () => {
    preTesElem.hidden = true;
    startTesElem.hidden = true;
    endTesElem.hidden = false;
    document.getElementById('endSkorTes').innerHTML = skorTes*10;
    skorTes = 0;

}
const restartTes = () => {
    preTesElem.hidden = false;
    startTesElem.hidden = true;
    endTesElem.hidden = true;
    clearInterval(timer);
}

const countDown = (attrId) => {
    // Set the date we're counting down to
    const date = new Date();
    const remainingTime = new Date(date.getTime() + 60*1000)

    // Update the count down every 1 second
    timer = setInterval(function() {

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
        checkResult();
        

        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById(attrId).innerHTML = "Time Up";
            setTimeout(endTes(), 3000)
        }
    }, 100);
}
const randomNext = () => {
    let challengeTes = document.getElementById('challengeTes');
    if(availableTesChallenge.length>1){
        shuffle(availableTesChallenge)
        challengeTes.innerHTML = availableTesChallenge.pop();
    }
    else{
        endTes();
    }
}
const shuffle = array => {
    array.sort(() => Math.random() - 0.5);
}
const checkResult = () => {
    let challengeTes = document.getElementById('challengeTes');
    if(challengeTes.innerHTML == predictZero){
        addPointTes();
        randomNext();
    }
}
const addPointTes = () => {
    let point = document.getElementById('pointTes')
    skorTes += 1;
    point.innerHTML = skorTes;
}
document.addEventListener('keyup', (e) => {
    if (e.code === 'Space' && startTesElem.hidden == false) {
        randomNext()
      }
  });