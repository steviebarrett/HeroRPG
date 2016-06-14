"use strict"

function ActiveGameObject(sprite, position) {
	GameObject.call(this, sprite, position);
}

ActiveGameObject.prototype = Object.create(GameObject.prototype);

ActiveGameObject.prototype.update = function(delta) {};


