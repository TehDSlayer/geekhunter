var TopDownGame = TopDownGame || {};

TopDownGame.game = new Phaser.Game(320, 320, Phaser.AUTO, '');

TopDownGame.game.state.add('Boot', TopDownGame.Boot);
TopDownGame.game.state.add('Preload', TopDownGame.Preload);
TopDownGame.game.state.add('Game', TopDownGame.Game);
TopDownGame.game.state.add('Battle', TopDownGame.Battle);
TopDownGame.game.state.add('GameOver', TopDownGame.GameOver);

TopDownGame.game.state.start('Boot');