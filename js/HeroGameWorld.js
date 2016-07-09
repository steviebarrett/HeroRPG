"use strict";

function HeroGameWorld(layer) {

	GameObjectList.call(this, layer);
	this.add(new SpriteGameObject(sprites.background, ID.layer_background));

	//the grid array
	var rows = 7, columns = 11;
	var grid = new GameGrid(rows, columns, ID.layer_grid);

	grid.position = new Vector2(0, 0);
	grid.cellWidth = 70;
	grid.cellHeight = 70;
	this.add(grid);

	for (var i = 0; i < rows * columns; i++) {
		grid.add(new GridSquare(ID.layer_grid));
	}

	//our hero
	var hero = new Hero(sprites.hero, ID.layer_objects);
	this.add(hero);

	var enemy = new Enemy(sprites.enemy, ID.layer_objects);
	this.add(enemy);

	//test a label for later use as an action menu
	var actionMenu = new Label("Segoe UI Mono", "20px", ID.layer_actionMenu, ID.actionMenu);
	actionMenu.position = new Vector2(210,210);
	actionMenu.text = "Action Menu";
	this.add(actionMenu);
/*
	this.enemy = new Enemy(sprites.enemy);
	this.enemy.scale = 0.75;
*/
}

Object.defineProperty(HeroGameWorld.prototype, "gameWorld", {
	get: function () {
		return this.gameWorld;
	}
});

/*
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
*/

HeroGameWorld.prototype = Object.create(GameObjectList.prototype);
