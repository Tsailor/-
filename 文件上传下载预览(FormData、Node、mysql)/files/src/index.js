// console.log(123)
// let fileInput = document.querySelector(".file-input");
// let fileBox = document.querySelector("#file-box");
// fileInput.addEventListener("change",() =>{
//     console.log("file choose");
//     if(fileInput.files.length !== 0){
//         console.log(fileInput.files[0])
//     }
// })
// fileInput.ondrop = function (event) {
//     　　　　　　event.preventDefault();
//     　　　　　
//     　　　　　　var files = event.dataTransfer.files;
//     console.log("drop")
//             console.log(files[0])
//     　　　　　　// do something with files
//     　　　　};
// let ele = {
//     fileInput: document.querySelector(".file-input"),
//     fileProgress: document.querySelector(".file-progress")
// }
import FileInput from "./fileInput.js"
window.onload = function(){
    let fileRes = new FileInput();
    console.log(fileRes)
}