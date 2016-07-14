"use strict"

function GameObjectGrid(rows, columns, layer, id) {
	GameObjectList.call(this, layer, id);

	this.cellWidth = 0;
	this.cellHeight = 0;
	this._rows = rows;
	this._columns = columns;
}

GameObjectGrid.prototype = Object.create(GameObjectList.prototype);

Object.defineProperty(GameObjectGrid.prototype, "rows", {
	get: function () {
		return this._rows;
	}
});

Object.defineProperty(GameObjectGrid.prototype, "columns", {
	get: function () {
		return this._columns;
	}
});

GameObjectGrid.prototype.add = function (gameobject) {
	var row = Math.floor(this._gameObjects.length / this._columns);
	var col = this._gameObjects.length % this._columns;
	this._gameObjects.push(gameobject);
	gameobject.parent = this;
	gameobject.position = new Vector2(col * this.cellWidth, row * this.cellHeight);
};

GameObjectGrid.prototype.addAt = function (gameobject, col, row) {
	this._gameObjects[row * this._columns + col] = gameobject;
	gameobject.parent = this;
	gameobject.position = new Vector2(col * this.cellWidth, row * this.cellHeight);
};

GameObjectGrid.prototype.at = function (col, row) {
	var index = row * this._columns + col;
	if (index < 0 || index >= this._gameObjects.length)
		return null;
	else
		return this._gameObjects[index];
};

/*
 Cut down version, Cf original in JewelJam4
 */
GameObjectGrid.prototype.getAnchorPosition = function (gameobject) {
	var gridPos = this.getCell(gameobject);
	return new Vector2(gridPos.x * this.cellWidth, gridPos.y*this.cellHeight);
};


/*
 User added functions
 */
GameObjectGrid.prototype.getCell = function (gameobject) {
	var l = this._gameObjects.length;
	for (var i = 0; i < l; ++i)
		if (this._gameObjects[i] === gameobject) {
			var row = Math.floor(i / this.columns);
			var col = i % this.columns;
			return new Vector2(col, row);
		}
};

GameObjectGrid.prototype.getCellPos = function (col, row) {
	var cellVector = this.getValidCellVector(col, row);
	return this._gameObjects[cellVector.y * this._columns + cellVector.x].worldPosition;
};

GameObjectGrid.prototype.getValidCellVector = function (col, row) {
	if (col < 0) {
		col = 0;
	}
	if (col > this._columns-1) {
		col = this._columns-1;
	}
	if (row < 0) {
		row = 0;
	}
	if (row > this._rows-1) {
		row = this._rows-1;
	}
	return new Vector2(col, row);
};

GameObjectGrid.prototype.showRange = function (col, row, range) {

	var baseCellPos = new Vector2(col, row);
	var movementGrid = this.getMovementGrid(new Array(), baseCellPos, range);

	for (var i = 0;i < movementGrid.length;i++) {
		col = movementGrid[i].x;
		row = movementGrid[i].y;

		if (baseCellPos.x == col && baseCellPos.y == row) {
			continue;
		}

		this.addAt(new GridSquare(sprites.gridSquareOption, ID.layer_grid),
			col, row);
	}
};

GameObjectGrid.prototype.getPossibleCells = function (col, row) {
	var possibleCells = new Array(
		new Vector2(col, row-1),
		new Vector2(col, row+1),
		new Vector2(col-1, row),
		new Vector2(col+1, row)
	);
	return possibleCells;
};

GameObjectGrid.prototype.getMovementGrid = function (grid, cell, range) {
	if (range === 0) {
		return grid;
	}
	var possibleCells = this.getPossibleCells(cell.x, cell.y);
	for (var i = 0;i < possibleCells.length; i++) {
		grid.push(possibleCells[i]);
		this.getMovementGrid(grid, possibleCells[i], range-1);
	}
	return grid;
};