import { Vector2 } from "../../../core/math/Vector2.js";
import { GameObject } from "../../../core/objects/GameObject.js";
import { TextRenderer } from "../../../core/render/TextRenderer.js";
import { Tilemap } from "../../../core/render/Tilemap.js";
import { LUMO_ENGINE2 } from "../../../LumoEngine2.js";
import { ItemsDatabase } from "../../classes/ItemsDatabase.js";
import { ItemObjectScript } from "./ItemObjectScript.js";
export class ItemObject extends GameObject {
    constructor(item) {
        super("item object");
        this.item = item;
        let tilemap = new Tilemap("items");
        let text = new TextRenderer();
        text.offset = new Vector2(-8, -16);
        this.script = new ItemObjectScript(item, text);
        tilemap.display = item.id;
        this.addComponent(tilemap);
        this.addComponent(this.script);
        this.addComponent(text);
        this.setZ(30);
    }
    static find(id) {
        for (let i in LUMO_ENGINE2.scene.objects) {
            let obj = LUMO_ENGINE2.scene.objects[i];
            if (obj.tag == "item object") {
                let obj2 = obj;
                if (obj2.script.item.id == id) {
                    return obj2;
                }
            }
        }
        return new ItemObject(ItemsDatabase.byId(0));
    }
}
