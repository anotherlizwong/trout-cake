// We create our only state
var mainState = {
	// Here we add all the functions we need for our state
	// For this project we will just have 3 functions
	preload: function() {
		// This function will be executed at the beginning
		// That's where we load the game's assets

		// Load image
		game.load.image('river', '../../assets/full-river-game-board.png');
		game.load.image('big-treasure', '../../assets/10xtreasure_chest.png');
		game.load.image('trevor', '../../assets/2xtrevor-traut.png');
	},
	create: function() {
		// This function is called after the preload function
		// Here we set up the game, display sprites, etc.

		// Display the image on the screen
		this.sprite = game.add.sprite(32, 32, 'trevor');
	},
	update: function() {
		// This function is called 60 times per second
		// It contains the game's logic

		// // Increment the angle of the sprite by 1, 60 times per seconds
		this.sprite.angle += 3;
	}
};
// We initialising Phaser
var game = new Phaser.Game(700, 400, Phaser.AUTO, 'content');
// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');