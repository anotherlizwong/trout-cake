
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: preload, create: create, update: update, render: render, jump: jump });

function preload() {
	game.load.image('background','assets/background.png');
	game.load.spritesheet('dog','assets/dog_xs_spritesheet.png',206,200,12);
}

var player;
var cursors;
var facingRight = false;

function create() {
	game.add.sprite(0, -320, 'background');
	game.world.setBounds(0, 0, 1280, 400);
	game.physics.startSystem(Phaser.Physics.ARCADE);

	player = game.add.sprite(game.world.centerX, 400, 'dog');
    player.animations.add('look-left',[3,2],6,false);
    player.animations.add('look-up-left',[0],6,false);
    player.animations.add('look-down-left',[1],6,false);
    player.animations.add('turn-right',[4,5,8],6,false);
    player.animations.add('turn-left',[6,7,3],6,false);
    player.animations.add('look-right',[8,9],6,false);
    player.animations.add('look-up-right',[11],6,false);
    player.animations.add('look-down-right',[10],6,false);


    game.physics.arcade.enable(player, Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(player);

    player.body.bounce.y = 0.3;
    player.body.gravity.y = 500;
    player.body.collideWorldBounds = true;
    player.scale.x = 1;
    player.scale.y = 1;

    var space_key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.jump, this);
}

function update() {

    if (cursors.up.isDown)
    {
        if (facingRight) {
            player.animations.play('look-up-right');
        }
        else {
            player.animations.play('look-up-left');
        }
        player.scale.x += .005;
        player.scale.y += .005;
    }
    else if (cursors.down.isDown)
    {
        if (facingRight) {
            player.animations.play('look-down-right');
        }
        else {
            player.animations.play('look-down-left');
        }
        player.scale.x -= .005;
        player.scale.y -= .005;
    }

    if (cursors.left.isDown)
    {
        if (facingRight) {
            player.animations.play('turn-left');
            facingRight = false;
        }
        else {
            player.animations.play('look-left');
        }
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        if (!facingRight) {
            player.animations.play('turn-right');
            facingRight = true;
        }
        else {
            player.animations.play('look-right');
        }
        player.body.velocity.x = 300;
    }
    else {
        player.body.velocity.x = 0;
    }

}

function render() {

    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.spriteCoords(player, 32, 500);

}

function jump() {
    player.body.velocity.y = -200;
    var animation = this.game.add.tween(player);
    // Set the animation to change the angle of the sprite to -20° in 100 milliseconds
    // animation.to({angle: -20}, 100);
    // And start the animation
    animation.start();
}