"use strict"

function GameObject(sprite, position) {
	this.sprite = sprite;
	this.position = position;   //a vector object
	this.origin = new Vector2(0, 0);    //TODO: work on calculating the origin
	this.scale = 1;
	this.visible = true;
}

GameObject.prototype.draw = function() {
	if (!this.visible) {
		return;
	}
	Canvas2D.drawImage(this.sprite, this.position, this.rotation, this.scale, this.origin);
};
