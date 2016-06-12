"use strict";

var enemy = {};

enemy.initialize = function() {
	enemy.position = { x : 200, y : 40 };
	enemy.origin = { x : 34, y : 34 };
	enemy.velocity = {x : 0, y : 0};
	enemy.rotation = 0;
};

enemy.handleInput = function (delta) {

	/*
	var newX = enemy.position.x;
	var newY = enemy.position.y;
	switch (Keyboard.keyDown) {
		case Keys.up:
			newY -= 10;
			break;
		case Keys.down:
			newY += 10;
			break;
		case Keys.left:
			newX -= 10;
			break;
		case Keys.right:
			newX += 10;
			break;
	}

	if (newY < 10) {
		newY = 10;
	} else if (newY > Canvas2D.canvas.height-10) {
		newY = Canvas2D.canvas.height-10;
	}
	enemy.position = {x : newX, y : newY};
	*/
};

enemy.update = function (delta) {};

enemy.draw = function () {
	Canvas2D.drawImage(sprites.enemy, enemy.position, enemy.rotation, enemy.origin);
};