class introo extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'introo' });
    }

    preload() {
        this.load.image('papa', 'assets/s1.png')
        this.load.image('pupu', 'assets/s2.png')
        this.load.image('dudu', 'assets/s3.png')

    }
    create () {

        this.add.image(0, 0, 'dudu').setOrigin(0, 0).setScale(1);

        console.log("introoScene")
       

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("gameScene");
            }, this );

    }

}
