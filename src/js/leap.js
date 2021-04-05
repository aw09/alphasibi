var info = document.getElementById("info");

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
      tes();
      printed = true;
    }
    info.innerHTML = frame.currentFrameRate;
  },

  // hand callbacks are run once for each hand in the frame
  hand: function (hand) {
    printed = false;
    lastValidFrameId = hand.frame.id;
    info.innerHTML +=
      hand.type +
      "," +
      hand.palmPosition +
      "," +
      hand.direction +
      "," +
      hand.palmVelocity +
      "<br/>";
    hand.fingers.forEach(function (finger) {
      info.innerHTML +=
        finger.type +
        "," +
        finger.dipPosition +
        "," +
        finger.pipPosition +
        "," +
        finger.mcpPosition +
        "," +
        finger.carpPosition +
        "<br/>";
    });
  },
});
var tes = () => {
  console.log(controller.frame(0).id + " " + controller.frame(20).id);
};
