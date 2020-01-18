import Dialog from "./dialog.js";

export default class ExtendsDialog extends Dialog {
    constructor(options){
        super(options);
    }
    createHtml(){
        super.createHtml();
        let myInput = document.createElement("input");
        myInput.type="text";
        myInput.classList.add("dialog-input");
        let scirptEle=document.querySelector("script");
        this.mainDiv.querySelector(".box-body").appendChild(myInput);
    }
    makeSure( ){
        let inputContent=this.mainDiv.querySelector(".dialog-input").value;
        console.log(inputContent)
        super.makeSure(inputContent);
    }
}