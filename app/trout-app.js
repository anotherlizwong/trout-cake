var height = 400;
var width = 700;
var x_center = width/2;
var y_center = height/2;

// We create our only state
var mainState = {
	// Here we add all the functions we need for our state
	// For this project we will just have 3 functions
	preload: function() {
		// This function will be executed at the beginning
		// That's where we load the game's assets
		game.stage.backgroundColor = '#ffffff';

		// Load image
		game.load.image('river', '../assets/full-river-game-board.png');
		game.load.image('big-treasure', '../assets/10xtreasure_chest.png');
		game.load.image('treasure', '../assets/2xtreasure_chest.png');
		game.load.image('enemy', '../assets/cake-monster-animated.gif');
		game.load.image('player', '../assets/2xtrevor-traut.png');
		game.load.image('spawn', '../assets/whirlpool_sm_bg.png');
	},
	create: function() {
		// This function is called after the preload function
		// Here we set up the game, display sprites, etc.
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// Display the image on the screen
		// game.add.sprite(positionX, positionY, imageName);
		// game.add.sprite(x_center-320/2, y_center-320/2, 'big-treasure');
		this.board = game.add.sprite(x_center-316/2, y_center-411/2+50, 'river');
		this.player = game.add.sprite(x_center+32*2, height-32*2,'player');
		this.enemy = game.add.sprite(32*6, 0,'enemy');
		game.add.sprite(x_center+32*2, height-32*4, 'spawn');
		game.add.sprite(32*4,0,'treasure');
	},
	update: function() {
		// This function is called 60 times per second
		// It contains the game's logic

		// // Increment the angle of the sprite by 1, 60 times per seconds
		// this.player.angle += 3;
	}
};
// We initialising Phaser
var game = new Phaser.Game(width, height, Phaser.AUTO, 'content');
// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', mainState);
game.state.start('main');