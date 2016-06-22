"use strict"

function ActiveGameObject(sprite, layer) {
	GameObject.call(this, sprite, layer);
	this.sprite = sprite;
	this.origin = Vector2.zero;
}

ActiveGameObject.prototype = Object.create(GameObject.prototype);

Object.defineProperty(ActiveGameObject.prototype, "size",
	{
		get: function () {
			return new Vector2(this.width, this.height);
		}
	});

Object.defineProperty(ActiveGameObject.prototype, "width",
	{
		get: function () {
			return this.sprite.width;
		}
	});

Object.defineProperty(ActiveGameObject.prototype, "height",
	{
		get: function () {
			return this.sprite.height;
		}
	});

ActiveGameObject.prototype.draw = function () {
	if (!this.visible)
		return;
	Canvas2D.drawImage(this.sprite, this.worldPosition, 0, 1, this.origin);
};