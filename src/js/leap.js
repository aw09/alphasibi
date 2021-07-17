class LeapMotion {
  constructor() {
    this.controller = new Leap.Controller({
      host: "127.0.0.1",
      port: 6437,
      enableGestures: false,
      frameEventName: "deviceFrame",
      useAllPlugins: true,
    });
    console.log(document.getElementById('visualizer'))
    this.controller.use("handHold");
    this.controller.use("handEntry");
    // this.controller.use("riggedHand");
    // this.controller.use("riggedHand", {
    //   parent: 
    // });
    this.controller.on("deviceAttached", function () {
      let status = document.getElementById("device-status");
      status.innerHTML = "On";
      status.style.color = "green";
    });
    this.controller.on("deviceRemoved", function () {
      let status = document.getElementById("device-status");
      status.innerHTML = "Off";
      status.style.color = "Red";
    });
    this.controller.on("handFound", function (hand) {
      LeapMotion.handFound = true;
      // console.log('handFound')
      // checkData();
    });
    this.controller.on("handLost", function (hand) {
      LeapMotion.handFound = false;
      // checkData();
    });
    // window.controller = Leap.loopController
    LeapMotion.dataArray = [];
    LeapMotion.handFound = false;
  }
  static reasemblyData(hand){
    let data = {palm: {type: hand.type, position: hand.palmPosition, direction: hand.palmPosition, velocity: hand.palmVelocity}, finger: ""}
    let dataFinger = []
    let finger = hand.fingers.forEach(function (finger){
        // info.innerHTML +=  finger.type+','+finger.dipPosition+','+finger.pipPosition+','+finger.mcpPosition+','+finger.carpPosition+'<br/>'
        dataFinger.push({type: finger.type, dip: finger.dipPosition, pip: finger.pipPosition, mcp: finger.mcpPosition, carp: finger.carpPosition})
    })
    data.finger = dataFinger
    return data
  }
  start() {
    this.controller.connect();
    Leap.loop({
      frame: function (frame) {
        info.innerHTML = frame.currentFrameRate;
      },
      hand: function (hand) {
        let dataJson = LeapMotion.reasemblyData(hand);
        if (LeapMotion.handFound) {
          LeapMotion.dataArray.push(opensibi.jsontoarray(dataJson));
          setTimeout(() => {
            LeapMotion.handFound = false;
          }, 1000);
        } else {
          LeapMotion.checkData();
          LeapMotion.handFound = true;
        }
      },
    });
  }
  stop(){
    this.controller.disconnect();
  }
  static checkData(){
    // * if data more than 50 is enough to predict
    if (LeapMotion.dataArray.length > 50) {
      LeapMotion.getResult();
      LeapMotion.dataArray = [];
    }
  };
  static async getResult(){
    // console.log(LeapMotion.dataArray.length)
    predictZero = await opensibi.predict(opensibi.calcAverage(LeapMotion.dataArray), 0);
    // predictNumber = await predict(calcAverage(LeapMotion.dataArray), 0, number = true);
    document.getElementById("res").innerHTML = predictZero;
  }

}



// var leap;
// const switchCheck = () => {
//   let switchButton = document.getElementById("switch");
//   if (switchButton.checked) {
//     leap = new LeapMotion();
//     leap.start();
//   } else {
//     leap.stop();
//     leap = ""
//   }
// };

