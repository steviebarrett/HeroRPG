"use strict";

function HeroGameWorld(layer) {

	GameObjectList.call(this, layer);
	this.add(new SpriteGameObject(sprites.background, ID.layer_background));

	console.log(this);

	//TODO: revisit this breakpoint
	return;
	
	this.hero = new Hero(sprites.hero, new Vector2(72, 405));
	this.enemy = new Enemy(sprites.enemy, new Vector2(200, 40));

	//the grid array
	this.rows = 5;
	this.cols = 10;
	this.grid = new Array(this.rows * this.cols);
	for (var i = 0;i < this.rows * this.cols; i++) {
		this.grid[i] = sprites.hero;    //fill the grid with heroes just now
	}
}

HeroGameWorld.prototype.setGridValue = function (x, y, value) {
	var index = y * this.columns + x;
	this.grid[index] = value;
};

HeroGameWorld.prototype.getGridValue = function (x, y) {
	var index = y * this.columns + x;
	return this.grid[index];
};

HeroGameWorld.prototype.handleInput = function (delta) {
	this.hero.handleInput(delta);
};

HeroGameWorld.prototype.update = function (delta) {
	this.hero.update(delta);
};

HeroGameWorld.prototype.draw = function () {
	Canvas2D.drawImage(sprites.background);

	//this.hero.draw();
	//this.enemy.draw();

	for (var row = 0; row < this.rows; row++) {
		for (var col = 0; col < this.cols; col++) {
			var position = new Vector2(85 + col * 85, 150 + row * 85);
			Canvas2D.drawImage(this.hero.sprite, position);     //temp for *test*
			//Canvas2D.drawImage(this.getGridValue(col, row), position);
		}
	}
};

HeroGameWorld.prototype.reset = function () {
	this.hero.reset();
};

HeroGameWorld.prototype.isOutsideWorld = function (position) {
	return position.x < 0 || position.x > Game.size.x || position.y > Game.size.y;
};

HeroGameWorld.prototype = Object.create(GameObjectList.prototype);
