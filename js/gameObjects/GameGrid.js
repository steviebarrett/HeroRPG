"use strict";

function GameGrid(rows, columns, layer) {

	GameObjectGrid.call(this, rows, columns, layer, ID.grid);
/*	this.dragging = false;
	this._dragRow = 0;
	this._draggingLastX = 0;
	this._touchIndex = 0;
*/
}

GameGrid.prototype = Object.create(GameObjectGrid.prototype);

