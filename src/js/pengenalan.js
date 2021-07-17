class Pengenalan {
    constructor(){
        this.parent = document.getElementById('pengenalan');
        this.menu = document.getElementById('menuPengenalan');
        this.startPage = document.getElementById('startPengenalan')
        this.back = document.getElementById('kembaliPengenalan');
        this.slider = document.getElementById('slider');
        this.sliderPosition = 100;
        this.video = document.getElementsByTagName('video')[0]
    }
    start(option){
        this.hideAll();
        let children = this.startPage.children
        if(option=='huruf'){
            this.addSlider(abjadList);
            this.changeVideo('A')
            opensibi.changeMode('')
        }
        else{
            this.addSlider(numberList)
            this.changeVideo('1')
            opensibi.changeMode('number')

        }
        
        // this.startPage.hidden = false;
        this.back.hidden = false;
        
    }
    hideAll(){
        let child = this.parent.children[0].children;
        console.log(child);
        for (let i=0;i<child.length;i++){
            child[i].hidden = true;
        }
        this.deleteTempPage();
    }
    showMenu(){
        this.hideAll();
        this.menu.hidden = false
    }
    changeSlider(){
        this.sliderPosition += 100;
        let track = document.getElementById('slider_track')
        
        track.style.transform = `translateX(${this.sliderPosition})`;
    }
    changeVideo(filename){
        this.deleteTempPage();
        let page = this.startPage.cloneNode(true);
        // console.log(page);
        let path = './videos/'+filename+'.mp4';
        page.children[1].children[0].src = path;
        page.id = 'cloneStartPengenalan';
        page.hidden = false;
        this.parent.appendChild(page)

    }
    deleteTempPage(){
        let previous = document.getElementById('cloneStartPengenalan')
        if(previous){
            previous.remove();
        }
    }
    addSlider(list){
        let child = document.createElement('ul');
        child.style.display = 'flex';
        child.style.justifyContent = 'space-evenly';

        for (let i=0; i<list.length;i++){
            const element = document.createElement('li');
            let name = list[i]
            element.innerHTML = name;
            element.style.backgroundColor = 'grey';
            element.style.padding = '5px';
            element.type = 'button';
            // element.onclick = this.changeVideo(name);
            element.setAttribute("onclick",`pengenalan.changeVideo('${name}')`);
            child.appendChild(element);
        }
        this.slider.innerHTML = '';
        this.slider.appendChild(child);

    }
}