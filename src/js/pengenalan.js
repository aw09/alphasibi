class Pengenalan {
    constructor(){
        console.log("buat pengenalan");
        this.parent = document.getElementById('pengenalan');
        this.menu = document.getElementById('menuPengenalan');
        this.startPage = document.getElementById('startPengenalan')
        this.back = document.getElementById('kembaliPengenalan');
        this.buttonLatihan = document.getElementById('buttonLatihan');
        this.video = document.getElementsByTagName('video')[0];
        this.result = document.getElementById('resultPengenalan');
        this.slider;
        this.track;
        this.videoOption;
    }
    start(option){
        this.hideAll();
        this.slider = document.getElementById('slider');
        this.track = document.getElementById('slider-track');
        this.buttonLatihan.style.display = 'block';
        document.getElementById('')
        if(option=='huruf'){
            this.addSlider(abjadList);
            this.videoOption = 'A';
            this.changeVideo('A')
            opensibi.changeMode('')
        }
        else if(option=='angka'){
            this.addSlider(numberList)
            this.videoOption = '1';
            this.changeVideo('1')
            opensibi.changeMode('number')
        }
        
        // this.startPage.hidden = false;
        this.back.hidden = false;
    }
    hideAll(){
        let child = this.parent.children[0].children;
        for (let i=0;i<child.length;i++){
            child[i].hidden = true;
        }
        this.deleteTempPage();
    }
    showMenu(){
        this.hideAll();
        this.buttonLatihan.style.display = 'none';
        this.result.style.display = "none";
        this.menu.hidden = false;
    }
    // changeSlider(){
    //     this.sliderPosition += 100;
    //     // let track = document.getElementById('slider-track')
        
    //     this.track.style.transform = `translateX(${this.sliderPosition})`;
    // }
    changeVideo(filename, button=false){
        this.deleteTempPage();
        this.videoOption = filename;
        let page = this.startPage.cloneNode(true);
        console.log(this.startPage);
        let path = './videos/'+filename+'.mp4';
        page.children[1].children[0].src = path;
        page.id = 'cloneStartPengenalan';
        page.hidden = false;
        this.parent.appendChild(page);
        this.buttonLatihan.style.display = 'block';
        this.result.style.display = "none";
    }
    deleteTempPage(){
        let previous = document.getElementById('cloneStartPengenalan')
        if(previous){
            previous.remove();
        }
    }
    addSlider(list, position=0){
        // let child = document.getElementById('slider-track');

        for (let i=0; i<list.length;i++){
            const element = document.createElement('li');
            let name = list[i]
            element.innerHTML = name;
            element.style.padding = '5px';
            element.className = "card text-center btn btn-light"
            element.setAttribute("onclick",`pengenalan.changeVideo('${name}')`);
            this.track.appendChild(element);
        }
        this.track.style.transform = `translateY(${position}px)`
        this.slider.innerHTML = '';
        this.slider.appendChild(this.track);
        // console.log(this.slider);
    }
    practice(event){
        this.buttonLatihan.style.display = "none"
        this.result.style.display = "block";
        this.addListener();
        console.log(this.videoOption);

    }
    addListener(){
        let timer;
        const listener = () => {
            console.log("timer");
            if(predictZero==this.videoOption){
                console.log("berhasil");
                this.showAlert();
                clearInterval(timer);
            }
        } 
        timer = setInterval(listener.bind(this), 500);
    }
    showAlert(){
        let element = document.createElement('div');
        element.style = "position: absolute;top: 0;bottom: 0; right: 0; left: 0; margin:auto ; border-radius: 10px;background-color:white; width:400px; height: 200px; text-align: center; padding: 25px;  box-shadow: 1px 0px 26px rgba(0, 0, 0, 1);";
        element.innerHTML = '<div style="border-radius:100px; background-color: white; width:fit-content; height:fit-content; margin:auto;"><img width=100 height=100 src="./src/images/check.png" alt=""></div><p>Gerakan sesuai</p>';
        document.body.appendChild(element);
        setTimeout(() => {
            element.remove(element);
        }, 1000);
        this.buttonLatihan.style.display = 'block';
        this.result.style.display = "none";
    }
}