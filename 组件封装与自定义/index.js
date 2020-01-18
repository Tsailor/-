import Dialog from "./dialog.js";
import ExtendsDialog from "./extendsDialog.js";
import MyDialog from "./myDialog.js"

let mydialog = new Dialog({   //  配置项
    width: "40%",
    height: "200px",
    title: "测试标题111",
    maskable: false,
    isCancel: false,
    dragable: true,
    cancel() {
        console.log("点击取消了..");
    },
    sucess() {
        console.log("点击了确定...");
    }
});
document.querySelector(".btn").onclick = function () {
   mydialog.open();
}



let mydialog2 = new ExtendsDialog({   //  配置项
    width: "40%",
    title: "测试标题",
    maskable: true,
    isCancel: true,
    dragable: true,
    cancel() {
        console.log("点击取消了..");
    },
    sucess(value) {
        console.log("点击了确定...");
        console.log(value)
    }
});
document.querySelector(".btn2").onclick = function(){
    mydialog2.open();
}


// class ShowDialog extends HTMLElement{
//     constructor(){
//         super();
//         // console.log(this.getAttribute("width"));
//         let attrs = this.attributes;
//         let width = this.hasAttribute("width")? attrs.width:'30%';
//         let height = this.hasAttribute("height")?attrs.height:'250px';
//         // "true"
//         let maskable;
//         if(this.hasAttribute("maskable")){
//              maskable  = attrs.maskable.value;
//              console.log(maskable)
//         }
//         maskable = maskable==='true'?true:false
//         // let maskable = this.hasAttribute("maskable")?attrs.maskable:true;
//         console.log(maskable)
//         // console.log(height,width);
//         let dialog = new Dialog({
//             width,
//             height,
//             maskable
//         });
//         this.innerHTML = `<button>${this.innerText}</button>`;
//         this.onclick = function(){
//             // 弹出弹框；
//             dialog.open();
//         }
//     }
// }

customElements.define("my-dialogs",MyDialog)

