"use strict";

function Hero(sprite, position) {
	Character.call(this, sprite, position);
}

Hero.prototype = Object.create(Character.prototype);

Hero.prototype.handleInput = function (delta) {

	var newX = this.position.x;
	var newY = this.position.y;

	//TODO: Refactor keyboard handling into better code
	if (Keyboard.down(Keys.up)) {
		newY -= 10;
	}
	if (Keyboard.down(Keys.down)) {
		newY += 10;
	}
	if (Keyboard.down(Keys.left)) {
		newX -= 10;
	}
	if (Keyboard.down(Keys.right)) {
		newX += 10;
	}

	if (Game.gameWorld.isOutsideWorld({x:newX, y:newY})) {
		console.log("boundary breached");
		newX = this.position.x;
		newY = this.position.y;
	}
	this.position = new Vector2(newX, newY);

};
