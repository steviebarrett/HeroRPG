"use strict";

var heroGameWorld = {
};

heroGameWorld.handleInput = function (delta) {
	hero.handleInput(delta);
};

heroGameWorld.update = function (delta) {
	hero.update(delta);
	enemy.update(delta);
};

heroGameWorld.draw = function () {
	Canvas2D.drawImage(sprites.background, { x : 0, y : 0 }, 0, { x : 0, y : 0 });
	hero.draw(); 
	enemy.draw();
};

heroGameWorld.reset = function () {
	hero.reset();
	enemy.reset();
};

heroGameWorld.isOutsideWorld = function (position) {
	return position.x < 0 || position.x > Game.size.x || position.y > Game.size.y || position.y < 0;
};