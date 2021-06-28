var info = document.getElementById("info");
var dataGlobal
var dataArray = []
var handFound = false;
var controller = new Leap.Controller({
  host: "127.0.0.1",
  port: 6437,
  enableGestures: false,
  frameEventName: "deviceFrame",
  useAllPlugins: true,
});
controller.use('handHold');
controller.use('handEntry');
controller.connect();

controller.on('deviceAttached', function(){
    let status = document.getElementById('device-status');
    status.innerHTML = "On"
    status.style.color = "green"
});
controller.on('deviceRemoved', function(){
    let status = document.getElementById('device-status');
    status.innerHTML = "Off"
    status.style.color = "Red"
});


controller.on('handFound', function(hand){
  handFound = true;
  // console.log('handFound')
  // prediksi();
});
controller.on('handLost', function(hand){
  handFound = false;
  prediksi()
});
var lastValidFrameId;
var printed;
window.TO_RAD = Math.PI / 180;
window.TO_DEG = 1 / TO_RAD;
Leap.loop({
  // frame callback is run before individual frame components
  frame: function (frame) {
    if (
      lastValidFrameId != undefined &&
      printed == false &&
      frame.hands.length == 0
    ) {
      printed = true;
    }
    info.innerHTML = frame.currentFrameRate;
  },

  // hand callbacks are run once for each hand in the frame
  hand: function (hand) {
    dataGlobal = reasemblyData(hand)
    // console.log(dataGlobal)
    // run(jsontoarray(dataGlobal))
    printed = false;
    lastValidFrameId = hand.frame.id;
    // const timeout = () => {
      
    // }
    if(handFound){
      dataArray.push(jsontoarray(dataGlobal))
      setTimeout(()=>{handFound = false}, 1000)
    }else{
      prediksi();
      handFound = true;
    }
    // console.log(handFound)
    
    
  },
});
const buttonSend = () => {
  predict(jsontoarray(dataGlobal))
}
const prediksi = () => {
  if(dataArray.length>50){
    // console.log(dataArray.length);
    
    getResult();
    dataArray = [];
  }
}
const getResult = async() => {
  // console.log(calcAverage(dataArray))
  predictZero = await predict(calcAverage(dataArray), 0);
  document.getElementById('res').innerHTML = predictZero;
}
const switchCheck = () => {
  let switchButton  = document.getElementById('switch');
  if(switchButton.checked==false){
    controller.disconnect();
  }
  else{
    controller.connect()
  }
}