"use strict";

function Character(sprite) {
	ActiveGameObject.call(this, sprite);
	this.sprite = sprite;
	this.origin = Vector2.zero;
	this.rotation = 0;
	
}

Character.prototype = Object.create(ActiveGameObject.prototype);

Character.prototype.draw = function () {
	if (!this.visible)
		return;
	Canvas2D.drawImage(this.sprite, this.position, 0, 1, this.origin);
};