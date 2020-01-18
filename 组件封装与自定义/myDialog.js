import Dialog from "./dialog.js";

export default class MyDialog extends HTMLElement{
    constructor(){
        super();
        let attrs=this.attributes;
     //   console.log(attrs);
        let width=attrs.width;
        let maskable=attrs.maskable;
        console.log(maskable)
        let dialog = new Dialog({
            width,
            maskable
        });
        this.innerHTML = `<button>${this.innerText}</button>`;
        this.onclick = function(){
            // 弹出弹框；
            dialog.open();
        }
    };

}

// customElements.define("myDialog",MyDialog);