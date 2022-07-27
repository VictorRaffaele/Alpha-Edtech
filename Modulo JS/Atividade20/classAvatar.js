class Avatar{

    constructor(positionX, positionY, coinBag){
        this.positionX = positionX;
        this.positionY = positionY;
        this.coinBag = coinBag;
    }

    get getX(){return this.positionX;}

    get getY(){return this.positionY;}

    get getCoinBag(){return this.coinBag;}

    forward() {this.positionY++;}

    back(){if (this.positionY > 0) { this.positionY--;}}

    right(){this.positionX++;}

    left(){if (this.positionX > 0){this.positionX--;}}

    getCoin(){this.coinBag++;}

}

const avatar = new Avatar(0, 0, 0);
console.log(avatar.getX, avatar.getY, avatar.getCoinBag)
avatar.forward();
avatar.right();
avatar.getCoin();
console.log(avatar.getX, avatar.getY, avatar.getCoinBag)
avatar.back();
avatar.left();
avatar.getCoin();
console.log(avatar.getX, avatar.getY, avatar.getCoinBag)
