"use strict";

var sprites = {};
var hero; //TODO this should not be global

Game.loadAssets = function () {
	var loadSprite = function (sprite) {
		return Game.loadSprite("assets/" + sprite);
	};

	sprites.background = loadSprite("background_sb.png");
	sprites.hero = loadSprite("hero_sb.png");
	sprites.enemy = loadSprite("enemy1.png");
};

Game.initialize = function () {

	console.log("Creating game world");
	//hero.initialize();
	hero = new Hero(sprites.hero);
	enemy.initialize();
	Game.gameWorld = heroGameWorld;
};