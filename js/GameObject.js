"use strict"

function GameObject(sprite, position) {
	this.sprite = sprite;       //TODO: move sprite out of this object
	this.position = position;   //a vector object
	this.origin = new Vector2(0, 0);    //TODO: work on calculating the origin
										//& move out of this object
	this.scale = 1;             //TODO: move out of this object
	this._visible = true;
	this.parent = null;
	this.layer = typeof layer !== 'undefined'? layer : 0;
}

Object.defineProperty(GameObject.prototype, "visible",
	{
		get: function () {
			if (this.parent === null)
				return this._visible;
			else
				return this._visible && this.parent.visible;
		},

		set: function (value) {
			this._visible = value;
		}
	});

Object.defineProperty(GameObject.prototype, "root",
	{
		get: function () {
			if (this.parent === null)
				return this;
			else
				return this.parent.root;
		}
	});

Object.defineProperty(GameObject.prototype, "worldPosition",
	{
		get: function () {
			if (this.parent !== null) {
				return this.parent.worldPosition.addTo(this.position);
			} else {
				return this.position.copy();
			}
		}
	});

//TODO: move this further down the inheritance chain
GameObject.prototype.draw = function() {
	if (!this.visible) {
		return;
	}
	Canvas2D.drawImage(this.sprite, this.position, this.rotation, this.scale, this.origin);
};