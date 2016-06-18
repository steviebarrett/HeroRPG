"use strict";

function Hero(sprite, position) {
	Character.call(this, sprite, position);
}

Hero.prototype = Object.create(Character.prototype);

Object.defineProperty(Hero.prototype, "heroSelectRectangle",
	{
		get: function () {
			return new Rectangle(this.position.x - this.origin.x, this.position.y - this.origin.y,
			sprites.hero.height, sprites.hero.height);
		}
	});

Hero.prototype.handleInput = function (delta) {

	var newX = this.position.x;
	var newY = this.position.y;

	if (Touch.isTouchDevice) {
		var rect = this.heroSelectRectangle;
		if (Touch.touching && !Touch.containsTouch(rect)) {
			newX = Touch.position.x;
			newY = Touch.position.y;
		} else if (Touch.containsTouchPress(rect)) {
			//use this to detect if press inside the rectangle
			alert("hello");
		}
	}
	
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
