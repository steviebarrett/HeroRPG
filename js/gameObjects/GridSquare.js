"use strict";

function GridSquare(sprite, layer, id) {
	SpriteGameObject.call(this, sprite, layer, id);
}

GridSquare.prototype = Object.create(SpriteGameObject.prototype);
