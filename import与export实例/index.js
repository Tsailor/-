import Game from "./game/Game.js";

let ele={
    loginBtn:document.querySelector("#loginBtn"),
    loginInput:document.querySelector("#loginInput"),
    mainDiv:document.querySelector("#mainDiv"),
    userName:document.querySelector("#loginName"),
    longinPanel:document.querySelector("#longinPanel")
}
let game = new Game();
window.onload=function(){
    // 点击登录
    ele.loginBtn.onclick=function(){
        let userName = ele.loginInput.value;
        if(userName){
            ele.mainDiv.style.display="block";
            ele.userName.innerHTML=`贵宾玩家：${userName}`;
            ele.longinPanel.style.display="none";

            game.login(userName);
            game.loadHeroes();
            console.log(game)
        }
    }
}