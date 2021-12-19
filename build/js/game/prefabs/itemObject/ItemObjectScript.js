import { Component } from "../../../core/objects/Component.js";
import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
//ustawienia
let distanceToObjectToMerge = 50;
export class ItemObjectScript extends Component {
    constructor(item, text) {
        super("item object script");
        this.item = item;
        this.text = text;
        this.updateText();
        this.reserved = 0;
    }
    update() {
        if (this.item.amount <= 0) {
            this.gameObject.destroy();
        }
        this.updateText();
    }
    take(amount = 0) {
        if (this.item.amount - this.reserved >= amount) {
            this.item.amount -= amount;
            let x = this.item.clone();
            x.amount = amount;
            return x;
        }
        else {
            let x = this.item.clone();
            x.amount = this.item.amount;
            this.item.amount = 0;
            return x;
        }
    }
    add(amount = 0) {
        this.item.amount += amount;
    }
    addItem(item) {
        if (item.id == this.item.id) {
            this.item.amount += item.amount;
            item.amount = 0;
        }
    }
    updateText() {
        this.text.setValue(this.item.amount.toString());
    }
    start() {
        let scene = LUMO_ENGINE2.scene;
        for (let i in scene.objects) {
            let obj = scene.objects[i];
            if (obj.tag == "item object" && obj.uniqid != this.gameObject.uniqid) {
                if (obj.getPosition().distance(this.gameObject.getPosition()) < distanceToObjectToMerge) {
                    let itemobj = obj;
                    itemobj.script.addItem(this.item);
                }
            }
        }
    }
}
