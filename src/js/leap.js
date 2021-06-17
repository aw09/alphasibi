var info = document.getElementById("info");
var dataGlobal
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
  console.log("handfound");
  
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
    // run(jsontoarray(dataGlobal))
    printed = false;
    lastValidFrameId = hand.frame.id;
  },
});
var tes = () => {
  console.log(controller.frame(0).id + " " + controller.frame(20).id);
};
const buttonSend = () => {
  // console.log(jsontoarray(dataGlobal))
  // send(dataGlobal)
  // run(jsontoarray(dataGlobal))
  predict(jsontoarray(dataGlobal))
}
