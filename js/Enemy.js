"use strict";

function Enemy(sprite, position) {
	Character.call(this, sprite, position);
}

Enemy.prototype = Object.create(Character.prototype);

