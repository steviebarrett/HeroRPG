"use strict"

function GameObject(sprite, position) {
	this.sprite = sprite;
	this.position = position;   //a vector object
	this.visible = true;
}

GameObject.prototype.draw = function() {
	if (!this.visible) {
		return;
	}
	Canvas2D.drawImage(this.sprite, this.position, this.rotation, this.origin);
};
