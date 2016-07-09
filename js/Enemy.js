"use strict";

function Enemy(sprite, layer) {
	SpriteGameObject.call(this, sprite, layer);
}

Enemy.prototype = Object.create(SpriteGameObject.prototype);

