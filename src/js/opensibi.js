class OpenSIBI{
    constructor(mode=""){
        this.url = "http://34.101.133.218:8000/leap";
        this.mode = mode;
    }
    changeMode(mode){
        this.mode = mode;
    }
    jsontoarray(jsonfile){
        // console.log(jsonfile)
        let array = []
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
    
    async predict(data, get=3){
        let bodyFormData = new FormData();
        bodyFormData.append('test', data);
        bodyFormData.append('get', get);
        if(this.mode=="number")
            bodyFormData.append('number', 'True');
        if(this.mode=="knn")
            bodyFormData.append('knn', 'True');
        const promise = axios({
            method: "post",
            url: this.url,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
        const dataPromise = promise.then((response) => response.data.values)
        return dataPromise
    }
    
    calcAverage(dataArr){
        const dataCount = dataArr.length;
        const dataFeatures = dataArr[0].length; 
        let average = [];
        for(let i=0;i<dataFeatures;i++){
            let total = 0;
            for(let index=0;index<dataCount;index++){
                total += dataArr[index][i]
            }
            average.push(total/dataFeatures)
        }
        return average
    }
}
