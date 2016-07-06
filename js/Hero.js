"use strict";

function Hero(sprite) {
	Character.call(this, sprite);
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

	var grid = Game.gameWorld.find(ID.grid);
	var cell = grid.getCell(this);

	var newPos = new Vector2(this.position.x, this.position.y);
	//var newX = this.position.x;
	//var newY = this.position.y;

	if (Touch.isTouchDevice) {
		var rect = this.heroSelectRectangle;
		if (Touch.containsTouchPress(rect)) {
			//use this to detect if press inside the hero
		} else if (Touch.isTouching && !Touch.containsTouch(rect)) {
			//touched outside the hero position
			var pos = Touch.getPosition(0);
	//		newX = pos.x;
	//		newY = pos.y;
			//use this to move the hero to newly touched position
		}
	}

	//TODO: Refactor keyboard handling into better code
	if (Keyboard.down(Keys.up)) {
		newPos = grid.getCellPos(cell.x, cell.y-1);
		//var newPos = grid.moveTo(this, cell.x, cell.y-1);
		//newY = newPos.y;
	}
	if (Keyboard.down(Keys.down)) {
        newPos = grid.getCellPos(cell.x, cell.y+1);	}
	if (Keyboard.down(Keys.left)) {
		newPos = grid.getCellPos(cell.x-1, cell.y);	}
	if (Keyboard.down(Keys.right)) {
		newPos = grid.getCellPos(cell.x+1, cell.y);	}

	this.position = newPos;

};
