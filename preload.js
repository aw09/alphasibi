// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

window.test = function() {
  console.log("tes")
}
window.send = (data) => {
  console.log(data)
  socket.emit("message", data)
}
const io = require("socket.io-client")
var socket = io.connect("http://localhost:5000");

socket.on("seq-num", (msg) => console.info(msg));
socket.on('connect', function() {
    socket.emit('message', {data: 'I\'m connected!'});
});