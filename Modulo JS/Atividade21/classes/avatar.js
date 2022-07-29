export class Avatar{

    constructor(_positionX, _positionY, _coinBag){
       
        this.positionX = _positionX;
        this.positionY = _positionY;
        this.coinBag = _coinBag;
        this.life = 10;
        this.damage = 1;
    
    }

    get x(){return this.positionX;}

    get y(){return this.positionY;}

    get coinBag(){return this.coinBag;}

    get life(){return this.life;}

    forward() {
        
        if (this.life > 0) {
           
            this.positionY++;

        }
    }

    back() {
        
        if (this.life > 0) {

            if (this.positionY > 0) {
               
                this.positionY--;
           
            }
        }
    }

    right() {
        
        if (this.life > 0){

            this.positionX++;

        }
    }

    left() {
        
        if (this.life > 0){

            if (this.positionX > 0){
                
                this.positionX--;
           
            }
        }
    }

    getCoin() {
        
        if (this.life > 0){
          
            this.coinBag++;

        }
    }

    attack() {
    
        if (this.life > 0){

            return this.damage;

        }
    }

    receivedAttack(_damage) {
        
        if (this.life > 0) {

            this.life -= _damage;

        }
    }
}