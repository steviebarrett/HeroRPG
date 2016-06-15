"use strict";

function HeroGameWorld() {
	this.hero = new Hero(sprites.hero, new Vector2(72, 405));
	this.enemy = new Enemy(sprites.enemy, new Vector2(200, 40));
}

HeroGameWorld.prototype.handleInput = function (delta) {
	this.hero.handleInput(delta);
};

HeroGameWorld.prototype.update = function (delta) {
	this.hero.update(delta);
};

HeroGameWorld.prototype.draw = function () {
	Canvas2D.drawImage(sprites.background);

	this.hero.draw();
	this.enemy.draw();
};

HeroGameWorld.prototype.reset = function () {
	this.hero.reset();
};

HeroGameWorld.prototype.isOutsideWorld = function (position) {
	return position.x < 0 || position.x > Game.size.x || position.y > Game.size.y;
};
