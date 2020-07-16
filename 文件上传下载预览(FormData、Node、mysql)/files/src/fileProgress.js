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
            console.log("asdf")
            // let progresObj = document.querySelector(".file-progress")
            // progresObj.style.display = "block"
            let str = `
                
                <p>上传进度</p>
                <div class="file-progress-container">
                    <progress id="uploadprogress" min="0" max="100" value="70">50</progress>
                    <span class = "file-progress-tips">70%</span>
                    <span class="file-cancel" title="取消上传"></span>
                    <span class="file-success" ></span>
                </div>
            
                <div class="file-progress-desc">
                    <span class="file-progress-desc-speed">速度:10M/s</span>
                    <span class="file-progress-desc-time">时间:2020.07.10</span>
                </div> 
                `
            let fileProgress = document.querySelector('.file-progress');
            fileProgress.innerHTML = str;

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
        this.xhr.onloadend = function() {
            console.log("5678")
            let success = document.querySelector('.file-success');
            success.style.display = "block";
            let cancel = document.querySelector('.file-cancel');
            cancel.style.display = "none";
        }
        
    }
}