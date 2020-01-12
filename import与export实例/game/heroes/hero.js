import YaSer from "./YaSer.js";
import LuBan from "./LuBan.js";

export default function Hero(heroName){
    if(heroName==="YaSer")
        return new YaSer();
    else if(heroName==="LuBan")
        return new LuBan();
    else 
        return null;
}