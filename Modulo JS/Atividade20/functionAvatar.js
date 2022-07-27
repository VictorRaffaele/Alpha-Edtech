function Avatar(positionX, positionY, coinBag) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.coinBag = coinBag;
}

Avatar.prototype.getX = function() {return this.positionX;}
Avatar.prototype.getY = function() {return this.positionY;}
Avatar.prototype.getCoinBag = function() {return this.coinBag;}
Avatar.prototype.forward = function() {this.positionY++;}
Avatar.prototype.back = function() {if (this.positionY > 0) { this.positionY--;}}
Avatar.prototype.right = function() {this.positionX++;}
Avatar.prototype.left = function() {if (this.positionX > 0){this.positionX--;}}
Avatar.prototype.getCoin = function() {this.coinBag++;}

const avatar = new Avatar(0, 0, 0);
console.log(avatar.getX(), avatar.getY(), avatar.getCoinBag())
avatar.forward();
avatar.right();
avatar.getCoin();
console.log(avatar.getX(), avatar.getY(), avatar.getCoinBag())
avatar.back();
avatar.left();
avatar.getCoin();
console.log(avatar.getX(), avatar.getY(), avatar.getCoinBag())
