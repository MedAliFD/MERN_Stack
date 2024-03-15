

class Ninja {
    constructor(name, health, strength, speed) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
    }

    sayName() {
        console.log(`My ninja name is ${this.name}`);
    }

    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
    }
}

const ninja1 = new Ninja("Hyabusa", 100 , 10 , 10 );
const ninja2 = new Ninja("zed", 100 , 10 , 20 );

ninja2.sayName(); 
ninja2.showStats(); 

