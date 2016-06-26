"use strict";

function Hero(sprite, grid) {
	Character.call(this, sprite, grid);
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
		if (Touch.containsTouchPress(rect)) {
			//use this to detect if press inside the hero
		} else if (Touch.isTouching && !Touch.containsTouch(rect)) {
			//touched outside the hero position
			var pos = Touch.getPosition(0);
			newX = pos.x;
			newY = pos.y;
			//use this to move the hero to newly touched position
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

	this.position = new Vector2(newX, newY);

};
