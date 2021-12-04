class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'preloadScene' });
    }

    preload() {
        this.load.image('papa', 'assets/s1.png')


// Music and sounds
this.load.audio("bomb","assets/explosion.m4a");
this.load.audio("ping","assets/ping.m4a");
this.load.audio("bgm","assets/bgm.mp3");


    }
    create () {

        this.add.image(0, 0, 'papa').setOrigin(0, 0).setScale(1);

        console.log("preloadScene")
       

        var spaceDown = this.input.keyboard.addKey('SPACE');
        var key1 = this.input.keyboard.addKey(49);

        spaceDown.on('down', function(){
            this.scene.start("intro");
            }, this );
            

        key1.on('down',function(){
            this.scene.start("gameScene");
        }, this );

        this.music = this.sound
        .add("bgm", {
            loop: true,
        })
        .setVolume(0.2); //30% volume
        this.music.play();
        
    }
}
