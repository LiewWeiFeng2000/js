class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

    preload() {
        this.load.image('papa', 'assets/s1.png')
    }
    create () {

        this.add.image(0, 0, 'papa').setOrigin(0, 0).setScale(1);

        console.log("preloadScene")
       

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("intro");
            }, this );

    }

}
