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
const jsontoarray = (jsonfile) => {
    // console.log(jsonfile)
    array = []
    let palm = jsonfile.palm
    let finger = jsonfile.finger

    array = array.concat(palm.position)
    array = array.concat(palm.direction)
    array = array.concat(palm.velocity)
    
    finger.forEach((item)=>{
        array = array.concat(item.dip)
        array = array.concat(item.pip)
        array = array.concat(item.mcp)
        array = array.concat(item.carp)
    })
    return array
}
const send = async (jsonFile) => {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let response = xhr.responseText
            console.log(response)
        }
    };
    let data = JSON.stringify(jsonFile)
    
    xhr.send(data)
}



// * Using AJAX