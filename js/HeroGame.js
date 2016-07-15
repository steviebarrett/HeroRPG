"use strict";

var sprites = {};
var ID = {};    //used at the moment to store layers

Game.loadAssets = function () {

	var loadSprite = function (sprite) {
		return Game.loadSprite("assets/" + sprite);
	};

	sprites.background = loadSprite("background_sb.png");
	sprites.gridSquare = loadSprite("gridSquare.png");
	sprites.gridSquareOption = loadSprite("gridSquareOption.png");
	sprites.hero = loadSprite("hero_sb.png");
	sprites.enemy = loadSprite("enemy1.png");
};

Game.initialize = function () {

	console.log("Creating game world");

	//define game layers
	ID.layer_background = 1;
	ID.layer_grid = 10;
	ID.layer_objects = 20;
	ID.layer_actionMenu = 40;

	//define the object IDs
	ID.grid = 1;
	ID.actionMenu = 2;
	ID.gridSquare = 3;

	//create the game world
	Game.gameWorld = new HeroGameWorld();
	//Test only for object handling
	//var myHero = new Hero(sprites.hero, new Vector2(0,0));
	//myHero.draw();
	//
	//
};

