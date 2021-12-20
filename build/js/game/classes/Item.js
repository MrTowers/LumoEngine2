export class Item {
    constructor(id, name = "none", amount = 0, price = 0) {
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.id = id;
    }
    clone() {
        return new Item(this.id, this.name, this.amount, this.price);
    }
}
