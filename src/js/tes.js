var timer
const startTes = () => {
    document.getElementById('pretes').hidden = true;
    document.getElementById('startTes').hidden = false;
    countDown("countDownTes");
}
const endTes = () => {
    document.getElementById('startTes').hidden = true;
    document.getElementById('endTes').hidden = false;
}
const restartTes = () => {
    document.getElementById('endTes').hidden = true;
    document.getElementById('pretes').hidden = false;
    stopTimer();
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
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById(attrId).innerHTML = "EXPIRED";
    }
    }, 100);
}
const stopTimer = () => {
    clearInterval(timer);
}