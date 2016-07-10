"use strict";

function GridSquare(sprite, layer) {
	SpriteGameObject.call(this, sprite, layer);
}

GridSquare.prototype = Object.create(SpriteGameObject.prototype);
