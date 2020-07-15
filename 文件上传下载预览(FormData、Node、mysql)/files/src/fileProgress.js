export default class FileProgress {
    constructor(xhr){
        this.xhr = xhr;
        this.init();
    }
    init(){
        this.xhr.onloadstart = function() {
            console.log("asdf")
            let progresObj = document.querySelector(".file-progress")
            progresObj.style.display = "block"
        }
        this.xhr.upload.onprogress = function(evt) {
            
        }
        this.xhr.onloadend = function() {
            console.log("5678")
            let progresObj = document.querySelector(".file-progress")
            let timeOut = setTimeout(()=>{
                progresObj.style.display = "none"
            },3*1000)
         }
       
    }
   

}