"use strict";

function Character(sprite) {
	this.sprite = sprite;
	this.position = Vector2.zero;
	this.origin = Vector2.zero;
	this.rotation = 0;
	this.visible = true;
}

Character.prototype.update = function(delta) {};

Character.prototype.draw = function() {
	if (!this.visible) {
		return;
	}
	Canvas2D.drawImage(this.sprite, this.position, this.rotation, this.origin);
};