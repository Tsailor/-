import S11210 from '../skills/S11210.js';
import S11220 from '../skills/S11220.js';
import S11230 from '../skills/S11230.js';
export default class LuBan {
    constructor(){
        this.name = "鲁班";
        this.hp = 3300;
        this.skills = [new S11210,new S11220,new S11230];
        this.skins = [];
        this.ico = "301120-4116.png"
    }
}