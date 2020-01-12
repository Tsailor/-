import Player from "./Player.js";
import hero from "./heroes/hero.js";
class Game{
    constructor(){
        this.player=null;
    }
    login(name){
        this.player= new Player(name)
    };
    loadHeroes(){
        this.player.heroes.push(hero("YaSer"));
        this.player.heroes.push(hero("LuBan"));
    }
};
let instance="";

export default function( ){
    if(!instance){
        instance=new Game();
    }
    return instance;
}