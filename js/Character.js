"use strict";

function Character(sprite, layer, id) {
	SpriteGameObject.call(this, sprite, layer, id);

	var _hitPoints = 100;
}

Character.prototype = Object.create(SpriteGameObject.prototype);

Object.defineProperty(Character.prototype, "hitPoints",
	{
		get: function () {
			return this._hitPoints;
		}
	});


