"use strict";

function Hero(sprite, position) {
	Character.call(this, sprite, position);
}

Hero.prototype = Object.create(Character.prototype);

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
	if (Game.gameWorld.isOutsideWorld({x:newX, y:newY})) {
		console.log("boundary breached");
		newX = this.position.x;
		newY = this.position.y;
	}
	this.position = new Vector2(newX, newY);

};
