class intro extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'intro' });
    }

    preload() {
        this.load.image('papa', 'assets/s1.png')
        this.load.image('pupu', 'assets/s2.png')
    }
    create () {

        this.add.image(0, 0, 'pupu').setOrigin(0, 0).setScale(1);

        console.log("introScene")
       

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("introo");
            }, this );

    }

}
