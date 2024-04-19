class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.arm1X = this.bodyX - 90;
        this.arm1Y = this.bodyY + 50;
        this.arm2X = this.bodyX + 90;
        this.arm2Y = this.bodyY + 50;
        this.leg1X = this.bodyX + 50;
        this.leg1Y = this.bodyY + 150;
        this.leg2X = this.bodyX - 50;
        this.leg2Y = this.leg1Y;
        this.eye1X = this.bodyX + 30;
        this.eye1Y = this.bodyY - 20;
        this.eye2X = this.bodyX - 30;
        this.eye2Y = this.bodyY - 20;
        this.horn1X = this.bodyX + 50;
        this.horn1Y = this.bodyY - 70;
        this.horn2X = this.bodyX - 50;
        this.horn2Y = this.horn1Y;
        this.aKey = null;
        this.dkey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueD.png");
        my.sprite.rightArm = this.add.sprite(this.arm1X, this.arm1Y, "monsterParts", "arm_blueB.png");
        my.sprite.rightArm.flipX = true;
        my.sprite.leftArm = this.add.sprite(this.arm2X,this.arm2Y, "monsterParts", "arm_blueB.png");
        my.sprite.rightLeg = this.add.sprite(this.leg1X, this.leg1Y, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg = this.add.sprite(this.leg2X, this.leg2Y, "monsterParts", "leg_blueA.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.rightEye = this.add.sprite(this.eye1X, this.eye1Y, "monsterParts", "eye_psycho_dark.png");
        my.sprite.rightEye.setScale(.75);
        my.sprite.leftEye = this.add.sprite(this.eye2X, this.eye2Y, "monsterParts", "eye_yellow.png");
        my.sprite.leftEye.setScale(.75);
        my.sprite.rightHorn = this.add.sprite(this.horn1X, this.horn1Y, "monsterParts", "detail_white_horn_small.png");
        my.sprite.leftHorn = this.add.sprite(this.horn2X, this.horn2Y, "monsterParts", "detail_white_horn_small.png");
        my.sprite.leftHorn.flipX = true;
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 35, "monsterParts", "mouthA.png");
        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY + 35, "monsterParts", "mouthB.png");
        my.sprite.fang.visible = false;
        my.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        my.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        //Event input: fangs
        fKey.on('down',(key, event) => {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        })
        //Event input: regular smile
        sKey.on('down',(key, event) => {
            my.sprite.fang.visible = false;
            my.sprite.smile.visible = true;
        })
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(my.aKey.isDown){
            for(let part in my.sprite){
                my.sprite[part].x -= 10;
            }
        }
        if(my.dKey.isDown){
            for(let part in my.sprite){
                my.sprite[part].x += 10;
            }
        }
    }

}