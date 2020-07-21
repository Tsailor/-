import FileList from "./fileList.js";    
export default class FileProgress {
    constructor(xhr){
        this.xhr = xhr;
        this.init();
    }
    init(){
        let upload = {
            stime : 0,    // start time
            sloaded : 0,   //  loaded size
            speed : 0,    //  speed
            unit : '',    //   "kb/s"
            endTime : 0,    //  end time
            dTime : 0,      // endTime - startTime
            dloaded : 0    //    already loaded
 
        };
       
        
        this.xhr.onloadstart = function() {
            console.log("开始上传")
            upload.stime = new Date().getTime(); //  开始上传时间
            upload.sloaded = 0;           //  已上传大小
        }
        this.xhr.upload.onprogress = function(evt) {
            upload.endTime = new Date().getTime();
            // 时间差；
            upload.dTime = (upload.endTime - upload.stime)/1000;
             // 当前时间内上传的文件大小
            upload.dloaded =  evt.loaded - upload.sloaded;

            upload.speed = upload.dloaded / upload.dTime;
            upload.unit = "b/s";
            upload.stime = new Date().getTime();
            upload.sloaded = evt.loaded;    // 已上传大小
            if(upload.speed/1024>1){
                upload.unit = "kb/s";
                upload.speed = upload.speed/1024;
            }
            if(upload.speed/1024>1){
                upload.unit = "mb/s";
                upload.speed = upload.speed/1024;
            }
            document.querySelector(".file-progress-desc-speed").innerHTML = upload.speed.toFixed(2) + upload.unit;
            let percent =  (evt.loaded/evt.total*100).toFixed(0);
            //    console.log(percent);
            document.querySelector("#uploadprogress").value = percent;
            document.querySelector(".file-progress-tips").innerHTML = percent+"%";

            let cancel = document.querySelector('.file-cancel');
            cancel.addEventListener("click",()=>{
                this.xhr.abort();
            });
        }
        this.xhr.upload.onloadend = function() {
            console.log("5678")
            let curData = document.querySelector(".file-progress-desc-time")
            curData.innerText = "时间:" + getDateForMat()
            let success = document.querySelector('.file-success');
            success.style.display = "block";
            let cancel = document.querySelector('.file-cancel');
            cancel.style.display = "none";
        }
        this.xhr.onload = function () {
            let fileList = new FileList();

        }
        
    }
}

function getDateForMat(){
    let dt = new Date();
    let dMonth = dt.getMonth()+1;
    let dMinutes
    dt.getMinutes < 10 ? dMinutes = "0"+dt.getMinutes() : dMinutes = dt.getMinutes();
    let curDate = dt.getFullYear()+'/'+ dMonth+'/'+ dt.getDate() +' '+dt.getHours()+':'+dMinutes;
    return curDate  
}