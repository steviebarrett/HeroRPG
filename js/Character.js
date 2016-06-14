"use strict";

function Character(sprite, position) {
	ActiveGameObject.call(this, sprite, position);
	this.origin = Vector2.zero;
	this.rotation = 0;
	
}

Character.prototype = Object.create(ActiveGameObject.prototype);

