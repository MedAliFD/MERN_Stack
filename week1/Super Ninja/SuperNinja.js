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

const ninja1 = new Ninja("zed");

ninja1.sayName(); 
ninja1.showStats(); 
ninja1.drinkSake();
ninja1.showStats();

class Sensei {
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