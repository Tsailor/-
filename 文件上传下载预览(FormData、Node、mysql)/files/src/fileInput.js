export default class FileInput{
    constructor(){
        this.file = "";
        this.progress = ""
        this.init();  
    }
    init(){
        console.log("fileInput")
        this.upLoadFile();
    }
    upLoadFile(){
         let ele = {        
                fileInput: document.querySelector(".file-input"),
                fileProgress: document.querySelector(".file-progress")
        }
        
        ele.fileInput.addEventListener("change", chooseFile);
        ele.fileInput.addEventListener("drop", chooseDropFile);
    
    }
}
function chooseFile() {
    let self = this;
    if(self.files.length !== 0){
        let file = self.files[0];
        unloadFile(file)
    }
}
function chooseDropFile(event) {
    event.preventDefault();　　　　
    let file = event.dataTransfer.files[0];
    unloadFile(file)
}
function unloadFile(file) {
    console.log("uploadFile");
    let formData  = new FormData();
    formData.append('upLoad',file);
    let xhr = new XMLHttpRequest();
    xhr.open('post','/files');
    xhr.onload = function(){
        console.log("success")
    }
    xhr.send(formData);
}