import {Avatar} from './Avatar.js';

class Mago extends Avatar{

    constructor(_positionX, _positionY, _coinBag){

        super(_positionX, _positionY, _coinBag);
        this.mana = 10;
        super.damage = 3;

    }

    get mana(){return this.mana;}

    attack(){

        if (this.life > 0) {
            
            this.mana--;
    
            if (this.mana == 0) {
                
                setTimeout(this.mana = 10, 10000);
    
            }
    
            return this.damage;
    
        }
    }
}