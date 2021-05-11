var url = "http://34a5888f8f70.ngrok.io/"
const timer = ms => new Promise(res => setTimeout(res, ms))
const reasemblyData = (hand) =>{
    data = {palm: {type: hand.type, position: hand.palmPosition, direction: hand.palmPosition, velocity: hand.palmVelocity}, finger: ""}
    let dataFinger = []
    let finger = hand.fingers.forEach(function (finger){
        info.innerHTML +=  finger.type+','+finger.dipPosition+','+finger.pipPosition+','+finger.mcpPosition+','+finger.carpPosition+'<br/>'
        dataFinger.push({type: finger.type, dip: finger.dipPosition, pip: finger.pipPosition, mcp: finger.mcpPosition, carp: finger.carpPosition})
    })
    data.finger = dataFinger
    return data
}
const send = async (jsonFile) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.responseText;
            console.log(response)
        }
    };
    let data = JSON.stringify(jsonFile)
    xhr.send(data);
    await timer(3000)
}


// * Using AJAX