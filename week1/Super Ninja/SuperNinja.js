class Ninja {
    constructor(name, health, strength, speed) {
        this.name = name;
        this.health = 90;
        this.strength = 3;
        this.speed = 3;
    }

    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }

    showStats() {
        console.log(`
        Name: ${this.name},
        Health: ${this.health}, 
        Strength: ${this.strength}, 
        Speed: ${this.speed}`);
    }
    drinkSake(){
        console.log("hp boost activated +10")
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, strength = 10, speed = 10, wisdom = 10) {
        super(name, health, strength, speed);
        this.wisdom = 10;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    showStats() {
        console.log(`
        Name: ${this.name},
        Health: ${this.health}, 
        Strength: ${this.strength}, 
        Speed: ${this.speed},
        Wisdom: ${this.wisdom}`);
    }
}
// const ninja1 = new Ninja("zed");

// ninja1.sayName(); 
// ninja1.showStats(); 
// ninja1.drinkSake();
// ninja1.showStats();

const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();
superSensei.showStats();

