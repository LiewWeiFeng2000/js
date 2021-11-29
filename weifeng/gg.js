class gg extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'gg' });
    }

    preload() {
        this.load.image('papa', 'assets/s1.png')
        this.load.image('pupu', 'assets/s2.png')
        this.load.image('dudu', 'assets/s3.png')
        this.load.image('haha', 'assets/d1.png')

    }
    create () {

        this.add.image(0, 0, 'haha').setOrigin(0, 0).setScale(1);

        console.log("introoScene")
       

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("gameScene");
            }, this );

    }

}
