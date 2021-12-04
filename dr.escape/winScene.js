class winScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'winScene' });
    }

    preload() {
        this.load.image('papa', 'assets/s1.png')
        this.load.image('pupu', 'assets/s2.png')
        this.load.image('dudu', 'assets/s3.png')
        this.load.image('haha', 'assets/d1.png')
        this.load.image('win', 'assets/winScene.png')

    }
    create () {

        this.add.image(0, 0, 'win').setOrigin(0, 0).setScale(1);

        console.log("introoScene")
       

        var spaceDown = this.input.keyboard.addKey('SPACE');

        spaceDown.on('down', function(){
            this.scene.start("gameScene");
            }, this );

    }

}
