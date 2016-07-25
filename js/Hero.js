"use strict";

function Hero(sprite, layer, id) {
	Character.call(this, sprite, layer, id);

	this._range = 2;
	this._step = this._range;

	//temp
	this.col = 3;
	this.row = 3;
}

Hero.prototype = Object.create(Character.prototype);

Object.defineProperty(Hero.prototype, "heroSelectRectangle",
	{
		get: function () {
			return new Rectangle(this.position.x - this.origin.x, this.position.y - this.origin.y,
			sprites.hero.height, sprites.hero.height);
		}
	});

Object.defineProperty(Hero.prototype, "range",
	{
		get: function () {
			return this._range;
		}
	});

Hero.prototype.handleInput = function (delta) {
	var grid = Game.gameWorld.find(ID.grid);
	var keyPressed = false;

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
	if (this._step) {
		if (Keyboard.pressed(Keys.up)) {
			this.row--;
			keyPressed = true;
		}
		if (Keyboard.pressed(Keys.down)) {
			this.row++;
			keyPressed = true;
		}
		if (Keyboard.pressed(Keys.left)) {
			this.col--;
			keyPressed = true;
		}
		if (Keyboard.pressed(Keys.right)) {
			this.col++;
			keyPressed = true;
		}
	}

	if (Keyboard.pressed(Keys.space)) {
		//show range
		grid.showRange(this.col, this.row, this._step);
	}

	if (keyPressed) {
		grid.clearMovementGrid();
		this._step--;
	}

	//ensures Hero stays within the grid
	var cellVector = grid.getValidCellVector(this.col, this.row);

	this.col = cellVector.x;
	this.row = cellVector.y;
	this.position = grid.getCellPos(this.col, this.row);

};

