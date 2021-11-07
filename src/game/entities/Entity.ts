import { Component } from "../../core/objects/Component.js";

export class Entity extends Component {
    health: number;
    hunger: number;
    thirst: number;
    sleep: number;

    hungerUsage: number;
    thirstUsage: number;
    sleepUsage: number;

    constructor (health = 20) {
        super();
        this.health = health;
        this.hunger = 100;
        this.thirst = 100;
        this.sleep = 100;

        this.hungerUsage = 0.1;
        this.thirstUsage = 0.1;
        this.sleepUsage = 0.1;
    }

    update (delta = 0) {
        this.hunger -= (delta / 1000) * this.hungerUsage;
        this.thirst -= (delta / 1000) * this.thirstUsage;
        this.sleep -= (delta / 1000) * this.sleepUsage;

        if (this.hunger < 0 || this.thirst < 0) {
            this.health -= (delta / 1000) * 0.01;
        }
    }
}