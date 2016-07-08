"use strict";

function Hero(sprite, layer) {
	SpriteGameObject.call(this, sprite, layer);

	//temp
	this.position = new Vector2(210,210);
	this.col = 3;
	this.row = 3;
}

Hero.prototype = Object.create(SpriteGameObject.prototype);

Object.defineProperty(Hero.prototype, "heroSelectRectangle",
	{
		get: function () {
			return new Rectangle(this.position.x - this.origin.x, this.position.y - this.origin.y,
			sprites.hero.height, sprites.hero.height);
		}
	});


Hero.prototype.handleInput = function (delta) {
	var grid = Game.gameWorld.find(ID.grid);
/*
	var cell = grid.getCell(this);

	var currPos = new Vector2(this.position.x, this.position.y);
	var newCell = null;
	var newCol = cell.x;
	var newRow = cell.y;
*/
	var newCol, newRow;

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
	if (Keyboard.pressed(Keys.up)) {
		grid.getValidCellVector(this.col, this.row--);
	}
	if (Keyboard.pressed(Keys.down)) {
		grid.getValidCellVector(this.col, this.row++);
	}
	if (Keyboard.pressed(Keys.left)) {
		grid.getValidCellVector(this.col--, this.row);
	}
	if (Keyboard.pressed(Keys.right)) {
		grid.getValidCellVector(this.col++, this.row);
	}


//	newCell = new Vector2(newCol, newRow);
//	grid.moveCellContents(this, cell, newCell);
	var cellVector = grid.getValidCellVector(this.col, this.row);
	this.col = cellVector.x;
	this.row = cellVector.y;
	this.position = grid.getCellPos(this.col, this.row);

};

