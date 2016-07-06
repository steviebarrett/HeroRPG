"use strict"

function GameObject(layer, id) {
	this.layer = typeof layer !== 'undefined'? layer : 0;
	this.id = typeof id !== 'undefined' ? id : 0;
	this.position = Vector2.zero;
	this.origin = Vector2.zero;    //TODO: work on calculating the origin
										//& move out of this object
	this.scale = 1;             //TODO: move out of this object
	this._visible = true;
	this.parent = null;

	this.velocity = Vector2.zero;
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

GameObject.prototype.handleInput = function (delta) {
};

GameObject.prototype.update = function (delta) {
	this.position.addTo(this.velocity.multiply(delta));
};

GameObject.prototype.draw = function () {
};

GameObject.prototype.reset = function () {
	this._visible = true;
};

