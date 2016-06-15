"use strict";

var sprites = {};

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

	//create the game world
	Game.gameWorld = new HeroGameWorld();
};

