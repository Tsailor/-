import FileProgress from './fileProgress.js';

export default class FileInput{
    constructor(){
        this.xhr = null;
        this.file = null;
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
        
        ele.fileInput.addEventListener("change", this.chooseFile.bind(this));
        ele.fileInput.addEventListener("drop", this.chooseDropFile.bind(this));
    
    }

    chooseFile() {
        let files = document.querySelector(".file-input").files;
        if(files.length !== 0){
            this.file = files[0];
            this.sendFile(this.file)
        }
    }
    chooseDropFile(event) {
        event.preventDefault();　　　　
        this.file = event.dataTransfer.files[0];
        this.sendFile(this.file)
    }
    sendFile(file) {
        let formData  = new FormData();
        formData.append('upLoad',file);
        let xhr = new XMLHttpRequest();
        this.xhr = xhr;
        xhr.open('post','/files');
        // xhr.onloadstart = function(){
        //     console.log("1234")
        //     let progresObj = document.querySelector(".file-progress")
        //     progresObj.style.display = "block"
        // }
       
        let progress = new FileProgress(xhr)
        // this.xhr.onloadend = function() {
        //    console.log("5678")
        // }
         xhr.send(formData);
    } 
    // progress(xhr){
    //     xhr.onload = function() {
    //         console.log(12345678)
    //     }
    // }
}


// function chooseFile() {
//     let self = this;
//     if(self.files.length !== 0){
//         let file = self.files[0];
//         unloadFile(file)
//     }
// }
// function chooseDropFile(event) {
//     event.preventDefault();　　　　
//     let file = event.dataTransfer.files[0];
//     unloadFile(file)
// }
// function unloadFile(file) {
//     console.log("uploadFile");
//     let formData  = new FormData();
//     formData.append('upLoad',file);
//     let xhr = new XMLHttpRequest();
//     xhr.open('post','/files');
//     xhr.onload = function(){
//         console.log(xhr.responseText)
//     }
//     xhr.send(formData);
// }