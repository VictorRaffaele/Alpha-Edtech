import {Avatar} from './Avatar.js';

class Cowboy extends Avatar{

    constructor(_positionX, _positionY, _coinBag){

        super(_positionX, _positionY, _coinBag);
        this.bullets = 10;
        super.damage = 2;
    
    }

    get bullets() {return this.bullets;}

    attack() {
    
        if (this.life) {

            this.bullets--;
            return this.damage;

        }
    }

    findBullets(_bullets) {this.bullets += _bullets}
}