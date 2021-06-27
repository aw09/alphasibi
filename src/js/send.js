const url = "http://34.101.133.218:8000/leap"
// const url = "http://localhost:9000/leap"
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

const predict = async(data, get=3) => {
    let bodyFormData = new FormData();
    bodyFormData.append('test', data);
    bodyFormData.append('get', get);
    const promise = axios({
        method: "post",
        url: url,
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
    })
    const dataPromise = promise.then((response) => response.data.values)
    return dataPromise
}

const calcAverage = (dataArr) => {
    let average = [];
    for(let i=0;i<dataArr[0].length;i++){
        let total = 0;
        for(let index=0;index<dataArr.length;index++){
            total += dataArr[index][i]
        }
        average.push(total/69)
    }
    return average
}