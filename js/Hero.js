"use strict";

function Hero(sprite) {
	Character.call(this, sprite);
	this.position = new Vector2(72, 405);
	this.origin = new Vector2(34, 34);
}

Hero.prototype = Object.create(Character.prototype);

/*
hero.initialize = function() {
    hero.position = { x : 72, y : 405 };
    hero.origin = { x : 34, y : 34 };
    hero.rotation = 0;
};
*/

Hero.prototype.handleInput = function (delta) {
	var newX = this.position.x;
	var newY = this.position.y;
	switch (Keyboard.keyDown) {
		case Keys.up:
			newY -= 10;
			break;
		case Keys.down:
			newY += 10;
			break;
		case Keys.left:
			newX -= 10;
			break;
		case Keys.right:
			newX += 10;
			break;
	}
	if (heroGameWorld.isOutsideWorld({x:newX, y:newY})) {
		console.log("boundary breached");
		newX = this.position.x;
		newY = this.position.y;
	}
	this.position = {x : newX, y : newY};
};

/*
hero.update = function (delta) {};

hero.draw = function () {
    Canvas2D.drawImage(sprites.hero, hero.position, hero.rotation, hero.origin);
};
*/
