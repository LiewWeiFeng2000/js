
class gameScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'gameScene' });
    }

    preload() {

        var map = this.load.tilemapTiledJSON('world','assets/tile1.json')

        //this.load.image("cloud", "assets/Street32x32.png");


         this.load.image('door', 'assets/door.png')
         this.load.image('house', 'assets/house.png')
         this.load.image('playground2', 'assets/playground2.png')
         this.load.image('playground', 'assets/playground.png')
         this.load.image('popo', 'assets/Street32×32.png')
         this.load.image('pipi', 'assets/Building32×32.png')


        // VLiew chars
        this.load.atlas('hero','assets/vic.png','assets/vic.json')

        // VLiew NPC
        this.load.atlas('bad','assets/mpc.png','assets/mpc.json')
        this.load.atlas('keyTile','assets/keyTile.png','assets/keyTile.json')

        


    } // end of preload //

    create (){

    console.log("mainworld")
    
   var map = this.make.tilemap({key:'world'});


    var tileset1= map.addTilesetImage('house','house');
    var tileset2= map.addTilesetImage('playground','playground');
    var tileset3= map.addTilesetImage('playground2','playground2');
    var tileset4= map.addTilesetImage('door','door');
    var tileset5= map.addTilesetImage('Building32×32','pipi');
    var tileset6= map.addTilesetImage('Street32×32','popo');
    var tileset7= map.addTilesetImage('keyTile','keyTile');

    let tilesArray = [tileset1,tileset2,tileset3,tileset4,tileset5,tileset6]


    this.sandLayer = map.createLayer('sand',tilesArray,0,0)
    this.pathLayer = map.createLayer('path',tilesArray,0,0)
    this.shapesLayer = map.createLayer('shapes',tilesArray,0,0)
    this.skyLayer = map.createLayer('sky',tilesArray,0,0)
    this.cloudsLayer = map.createLayer('clouds',tilesArray,0,0)
    this.playgroundLayer = map.createLayer('playground',tilesArray,0,0)
    this.houseLayer = map.createLayer('house',tileset7,0,0)




    //victim
    this.anims.create({
        key: 'up',
        frames:[
            {key:'hero', frame: 'VB1.png'},

            {key:'hero', frame: 'VB2.png'},

            {key:'hero', frame: 'VB3.png'},

            {key:'hero', frame: 'VB4.png'},
        ],
        frameRate:10,
        repeat:-1,
    })

    this.anims.create({
        key: 'left',
        frames:[
            {key:'hero', frame: 'VL1.png'},

            {key:'hero', frame: 'VL2.png'},

            {key:'hero', frame: 'VL3.png'},

            {key:'hero', frame: 'VL4.png'},
        ],
        frameRate:10,
        repeat:-1,
    })

    this.anims.create({
        key: 'right',
        frames:[
            {key:'hero', frame: 'VR1.png'},

            {key:'hero', frame: 'VR2.png'},

            {key:'hero', frame: 'VR3.png'},

            {key:'hero', frame: 'VR4.png'},
        ],
        frameRate:10,
        repeat:-1,
    })

    this.anims.create({
        key: 'down',
        frames:[
            {key:'hero', frame: 'VF1.png'},

            {key:'hero', frame: 'VF2.png'},

            {key:'hero', frame: 'VF3.png'},

            {key:'hero', frame: 'VF4.png'},
        ],
        frameRate:10,
        repeat:-1,
    })
    




//NPC
    this.anims.create({
        key: '123',
        frames:[
            {key:'bad', frame: 'F1.png'},
            {key:'bad', frame: 'F2.png'},
            {key:'bad', frame: 'F3.png'},
            {key:'bad', frame: 'F4.png'},
            {key:'bad', frame: 'F5.png'},
        ],
        frameRate:10,
        repeat:-1,
    })

    this.anims.create({
      key: '456',
      frames:[
          {key:'bad', frame: 'B1.png'},
          {key:'bad', frame: 'B2.png'},
          {key:'bad', frame: 'B3.png'},
          {key:'bad', frame: 'B4.png'},
          {key:'bad', frame: 'B5.png'},
      ],
      frameRate:10,
      repeat:-1,
  })


    // load player into phytsics
    this.player = this.physics.add.sprite(400, 400, 'hero').setScale(1.5).setSize(16,16)

    //NPC movement
    this.bad = this.physics.add.sprite(458.44, 685.52,"badmove").play("123").setScale(1.5);
    this.bad2 = this.physics.add.sprite(1003.84, 294.82,"badmove").play("123").setScale(1.5);
    this.bad3 = this.physics.add.sprite(781.11, 1354.82,"badmove").play("456").setScale(1.5);




    this.time.addEvent({
        delay: 3000,
        callback: this.moveRightLeft,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 3000,
        callback: this.moveRightLeft2,
        callbackScope: this,
        loop: false,
      });

      this.time.addEvent({
        delay: 3000,
        callback: this.moveRightLeft3,
        callbackScope: this,
        loop: false,
      });

    //  Input Events
    this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);

    // this.player.setCollideWorldBounds(true);

    this.houseLayer.setTileIndexCallback(1683, this.removeItem, this);
    this.houseLayer.setTileIndexCallback(1681, this.removeItem, this);

    this.pathLayer.setCollisionByExclusion(-1, true)
    this.skyLayer.setCollisionByExclusion(-1, true)
    this.cloudsLayer.setCollisionByExclusion(-1, true)
    this.playgroundLayer.setCollisionByExclusion(-1, true)



    this.physics.add.collider(this.player, this.pathLayer);
    this.physics.add.collider(this.player, this.skyLayer);
    this.physics.add.collider(this.player, this.cloudslayer);
    this.physics.add.collider(this.player, this.playgroundlayer);
    this.physics.add.collider(this.houseLayer, this.player);

    this.physics.add.overlap(this.player, this.bad, this.guardOverlap, null, this);
    this.physics.add.overlap(this.player, this.bad2, this.guardOverlap, null, this);
    this.physics.add.overlap(this.player, this.bad3, this.guardOverlap, null, this);


    } // end of create //

    update () {
        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-200);
            this.player.anims.play("left", true); // walk left
            this.player.flipX = false; // flip the sprite to the left
            //console.log('left');

          } else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(200);
            this.player.anims.play("left", true);
            this.player.flipX = true; // use the original sprite looking to the right
            //console.log('right');

          } else if (this.cursors.up.isDown) {
            this.player.body.setVelocityY(-200);
            this.player.anims.play("up", true);
            //console.log('up');
          } else if (this.cursors.down.isDown) {
            this.player.body.setVelocityY(200);
            this.player.anims.play("down", true);
      
            //console.log('down');
          } else {
            this.player.anims.stop();
            this.player.body.setVelocity(0, 0);
            //console.log('idle');
      
          }
      
        }

        moveRightLeft() {
            console.log("moveDownUp");
            this.tweens.timeline({
              targets: this.bad,
              loop: -1, // loop forever
              ease: "Linear",
              duration: 3000,
              tweens: [
                {
                  x: 783.76,
                },
                {
                  x: 458.44,
                },
              ],
            });
          }


          moveRightLeft2() {
            console.log("moveDownUp");
            this.tweens.timeline({
              targets: this.bad2,
              loop: -1, // loop forever
              ease: "Linear",
              duration: 3000,
              tweens: [
                {
                  x: 1458.53,
                },
                {
                  x: 1033.84,
                },
              ],
            });
          }


          moveRightLeft3() {
            console.log("moveDownUp");
            this.tweens.timeline({
              targets: this.bad3,
              loop: -1, // loop forever
              ease: "Linear",
              duration: 3000,
              tweens: [
                {
                  x: 1087.69,
                },
                {
                  x: 781.11,
                },
              ],
            });
          }

removeItem(player, tile) {
    console.log("remove item", tile.index);
    this.houseLayer.removeTileAt(tile.x, tile.y); // remove the item
    return false;
  }

  guardOverlap() {
    console.log(" guard overlap player");
    this.scene.start("gg");
  }

    } // end of update // 

