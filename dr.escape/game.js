var config = {
    type: Phaser.AUTO,
    ////// pixel size * tile map size * zoom 
    width: 32 * 20,
    height: 32 * 20,
    /////////////////////////////////////////
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#aa0000',
    pixelArt: true,
    //// Add all scenes below in the array
    scene: [preloadScene, intro, gg, introo, gameScene]
};

var game = new Phaser.Game(config);