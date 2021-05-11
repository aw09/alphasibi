const io = require("socket.io-client")
var socket = io.connect("http://localhost:5000", {transports: ["websocket"]});

socket.on("seq-num", (msg) => console.info(msg));
socket.on('connect', function() {
    socket.emit('my event', {data: 'I\'m connected!'});
});

function sendmessage(message) {
    
    var message = document.getElementById("new_message").value;
    window.send(message)
    // console.log(message)
    // var Details3 = {  
    //     username: 'tes',  
    //     message: message  
    // }; 

    // socket.emit('my_message', message);
}