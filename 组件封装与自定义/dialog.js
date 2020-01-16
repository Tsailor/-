class Dialog {
    constructor(opts){
        this.options=Object.assign({    //浅拷贝 合并配置
            width: "30%",
            height: "250px",
            title: "测试标题",
            content: "测试内容",
            dragable: true, //是否可拖拽
            maskable: true, //是否有遮罩
            isCancel:false, //是否有取消
            cancel(){},
            sucess(){}
        },opts);

        this.init()
    }
    
    init(){
        this.createHtml();
        this.mainDiv.onclick=(e)=> { 
            // console.log(e.target)
            let className=e.target.className;
            switch(className){
                case "box-close" :
                    this.close();
                    break;
                case "dialog-remove" :
                    this.close();
                    this.options.cancel();
                    break;
                case "dialog-sure" :
                    this.close();
                    this.options.sucess();
                    break;
                default :
                    console.log("未选择...");
                    break;
            }
        }
    }
    close(){
        this.mainDiv.style.display= "none";
    }
    createHtml(){
        this.mainDiv=document.createElement("div");
   //     this.mainDiv.classList.add("dialog-main");
        let str=`
            <div class="dialog-wrap"></div>
            <div class="dialog-box">
                <div class="box-header">
                    <span class="box-title">${this.options.title}</span>
                    <span class="box-close">X</span>
                </div>
                <div class="box-body">
                    ${this.options.content}
                </div>
                <div class="box-footer">
                    <button class="dialog-remove">取消</button>
                    <button class="dialog-sure">确定</button>
                </div>
            </div>
        `
        this.mainDiv.innerHTML=str;
        let scriptEle=document.querySelector("script")
     
      //  document.querySelector("body").appendChild(this.mainDiv)
        document.querySelector("body").insertBefore(this.mainDiv,scriptEle)
        this.mainDiv.style.display="none";
    }
    open(){
        this.mainDiv.style.display="block";
    }
}