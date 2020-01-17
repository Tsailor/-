import Dialog from "./dialog.js";

let mydialog = new Dialog({   //  配置项
    width: "40%",
    title: "测试标题111",
    maskable: true,
    isCancel: false,
    dragable: true,
    cancel() {
        console.log("点击取消了..");
    },
    sucess() {
        console.log("点击了确定...");
    }
});
//   var div=document.querySelector(".btn");
//  console.log(div);
document.querySelector(".btn").onclick = function () {
   mydialog.open();
}