async function run(input){
    var info = document.getElementById("res");
    // info.innerHTML =  ""
    const MODEL_URL = './src/model/model.json';
    const model = await tf.loadLayersModel(MODEL_URL);
    // model.summary();
    // const input = tf.tensor2d([3.350107,210.991791,72.67574300000001,3.350107,210.991791,72.67574300000001,3.926035,20.801192999999998,10.339432,-24.535656,188.977554,47.358447999999996,-23.376247,190.502609,78.25621,-1.4719799999999998,177.21139499999998,115.876579,-1.4719799999999998,177.21139499999998,115.876579,-45.024902000000004,243.780884,26.3521,-34.690399,242.087219,43.806903999999996,-15.895045999999999,239.006958,75.55193299999999,14.505831,192.683487,118.272545,-31.471759999999996,199.388489,55.802395,-35.84478,217.32504300000002,37.203716,-1.3155270000000001,230.378433,59.422272,21.394995,189.09274299999998,106.13443000000001,-16.892147,183.09188799999998,52.130138,-17.312378,199.523224,32.810101,13.84288,218.42021200000002,50.444016,27.869452000000003,184.907349,97.654762,-4.244406,181.658478,44.509617,-0.6052679999999999,191.435333,29.991119,26.10277,204.019226,43.207188,31.917038,175.180542,89.84859499999999], [1,69]);
    input = tf.tensor2d(input, [1,69])
    let result = model.predict(input);
    result = await result.array()
    result = result[0]
    result = result.map((value)=>{
        console.log(typeof(value))
        return value.toFixed(2)
    }) 
    var confident = 0
    result = getOutput(result)
    info.innerHTML =  result[0] + ' confident : '+ result[1]
    console.log(result)
}
const getOutput = (array) => {
    let label = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let maxVal = 0
    let maxIndex = -1
    array.map((value, index)=>{
        if(value > maxVal){
            maxVal = value
            maxIndex = index
        }
    })
    return [label[maxIndex], maxVal]
}
