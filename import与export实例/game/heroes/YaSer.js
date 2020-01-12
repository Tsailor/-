import S16610 from '../skills/S16610.js';
import S16620 from '../skills/S16620.js';
import S16630 from '../skills/S16630.js';
export default class YaSer{
    constructor(){
        this.name = "亚瑟";
        this.hp = 3300;
        this.skills = [new S16610,new S16620,new S16630];
        this.skins = [];
        this.ico = "301660-08781.png"
    }
}