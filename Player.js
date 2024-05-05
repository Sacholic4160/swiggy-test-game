class Player {
    constructor(health , strength, attack){
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    reducedHealth(damage){
        this.health -=damage;
    }
}
Module.exports = Player;