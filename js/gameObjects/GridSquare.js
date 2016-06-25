"use strict";

function GridSquare(layer) {
	var spr = sprites.gridSquare;
	SpriteGameObject.call(this, spr, layer);
}

GridSquare.prototype = Object.create(SpriteGameObject.prototype);
