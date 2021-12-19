import { itemDB } from "../Main.js";
import { Item } from "./Item.js";
export class ItemsDatabase {
    constructor() {
        this.items = [
            new Item(0, "ram 64mb", 0, 8.83),
            new Item(1, "ram 128mb", 0, 17.66),
            new Item(2, "ram 256mb", 0, 35.32),
            new Item(3, "ram 512mb", 0, 70.64),
            new Item(4, "ram 1gb", 0, 141.28),
            new Item(5, "ram 2gb", 0, 282.56),
            new Item(6, "ram 4gb", 0, 565.12)
        ];
    }
    static byId(id) {
        return itemDB.items[id].clone();
    }
}
