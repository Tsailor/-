export default class FileList{
    constructor(){
        this.list = [],
        this.init();
    }
    init(){
        let xhr = new XMLHttpRequest();
        let fileContainer = document.querySelector(".file-list");
        fileContainer.innerHTML = "";
        xhr.open("GET","/files");
        xhr.onload = function () {
            let { status, data } = JSON.parse(xhr.responseText);
            if(status === 0){
                let p = document.createElement("p"); 
                let str = `当前没有上传任何文件`;
                p.innerText = str;
                p.classList.add("filelist-tips")
                fileContainer.appendChild(p);
            }else{
                console.log(data);
                let str =`<ul class = "file-list-panel">`
                data.map((v) => {
                    str += `<li class= "file-list-item">
                        <div class = "file-list-main">
                            <span class="file-item-name">${v.name}</span>
                            <span class="file-download" title="下载到本地" onClick = ${this.download}></span>
                            <span class="file-preview" title="右侧预览" onClick = ${this.preview}></span>
                        </div>
                        <span class = "file-list-date">${v.date}</span>
                    </li>`
                })
                str += `</ul>`;
                fileContainer.innerHTML = str;
            }
        }
        xhr.send()
    }
    download(){
        console.log("down!!")
    }
}