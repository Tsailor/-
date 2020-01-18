export default class Dialog {
    constructor(opts){
        this.options=Object.assign({    //浅拷贝 合并配置
            width: "30%",
            title: "测试标题",
            content: "测试内容",
            dragable: true, //是否可拖拽
            maskable: true, //是否有遮罩
            isCancel: true, //是否有取消
            cancel(){},
            sucess(){}
        },opts);

        this.init()
    }
    
    init(){
        this.createHtml();
     //   this.options.maskable
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
                    this.makeSure();
                    this.close();
                   // this.options.sucess();
                    break;
                default :
                    console.log("未选择...");
                    break;
            }
        }

        this.drag();
    }
    makeSure(value){
        this.options.sucess(value);
        console.log(value)
    }
    close(){
        this.mainDiv.style.display= "none";
    }
    createHtml(){
        this.mainDiv=document.createElement("div");
   //     this.mainDiv.classList.add("dialog-main");
        let str=`
            ${this.options.maskable?"<div class='dialog-wrap'></div>" :""}
            <div class="dialog-box">
                <div class="box-header">
                    <span class="box-title">${this.options.title}</span>
                    <span class="box-close">X</span>
                </div>
                <div class="box-body">
                    <span>${this.options.content}<span>
                </div>
                <div class="box-footer">
                    ${this.options.isCancel ? '<button class="dialog-remove">取消</button>' : ""}
                    <button class="dialog-sure">确定</button>
                </div>
            </div>
        `
        this.mainDiv.innerHTML=str;
        let scriptEle=document.querySelector("script")
     
      //  document.querySelector("body").appendChild(this.mainDiv)
        document.querySelector("body").insertBefore(this.mainDiv,scriptEle);
        let dialog=this.mainDiv.querySelector(".dialog-box");
        dialog.style.width=this.options.width;
        this.mainDiv.style.display="none";
    }
    open(){
        this.mainDiv.style.display="block";
    }

    drag(){
        let dialog=this.mainDiv.querySelector(".dialog-box");
        dialog.onmousedown = e =>{
            //console.log(e)
            let x = e.clientX - dialog.offsetLeft;
            let y = e.clientY - dialog.offsetTop;
            dialog.onmousemove = e =>{
        //        console.log(e)
                let left=e.clientX - x;
                let top=e.clientY - y;
                dialog.style.left = left+"px";
                dialog.style.top = top+"px";
            }
            document.onmouseup = e=>{
                dialog.onmousemove = "";
            }
        }
    }
}