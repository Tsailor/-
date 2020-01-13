import Game from "./game/Game.js";

let ele={
    loginBtn:document.querySelector("#loginBtn"),
    loginInput:document.querySelector("#loginInput"),
    mainDiv:document.querySelector("#mainDiv"),
    userName:document.querySelector("#loginName"),
    longinPanel:document.querySelector("#longinPanel"),
    heroList:document.querySelector("#hexoList"),
    skillList:document.querySelector("#skillList")
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
            game.player.heroes.forEach(hero => {
            let li = document.createElement("li");
            li.innerHTML = `英雄名称：${hero.name}<img src='./sources/heros/${hero.ico}' />`;
            li.onclick = function () {
                ele.skillList.innerHTML = "";
                hero.skills.forEach((skill, index) => {
                    let skillLi = document.createElement("li");
                    skillLi.onclick = function () {
                        // console.log(11);
                        // hero.fire(index);
                       // hero.fire.before(addFn,hero,index);
                    }
                    skillLi.innerHTML = `技能名称：${skill.name}<img src='./sources/skills/${skill.ico}' />`;
                    ele.skillList.appendChild(skillLi);
                })
            }
            ele.heroList.appendChild(li);
        })
        }
    }
}