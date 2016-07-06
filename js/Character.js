"use strict";

function Character(sprite) {
	ActiveGameObject.call(this, sprite);
	this.origin = Vector2.zero;
	this.rotation = 0;
	
}

Character.prototype = Object.create(ActiveGameObject.prototype);

