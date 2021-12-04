/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { LUMO_settings } from "../LUMO_settings.js";
import { Transform } from "../math/Transform.js";
import { Component } from "./Component.js";
export class GameObject {
    constructor(tag = "untagged") {
        this.components = [];
        this.transform = new Transform();
        this.tag = tag;
    }
    addComponent(component) {
        component.gameObject = this;
        this.components.push(component);
    }
    removeComponentById(id) {
        this.components.splice(id, 1);
    }
    removeComponentByTag(tag) {
        for (let i = 0; i < this.components.length; i++) {
            if (this.components[i].tag == tag) {
                this.components.splice(i, 1);
                return;
            }
        }
    }
    getComponentById(id) {
        return this.components[id];
    }
    getComponentByTag(tag) {
        for (let i in this.components) {
            if (this.components[i].tag == tag) {
                return this.components[i];
            }
        }
        if (LUMO_settings.debug) {
            console.error(`Component with tag "${tag}" cannot be found`);
        }
        return new Component();
    }
    getPosition() {
        return this.transform.position;
    }
    setPosition(location) {
        this.transform.position = location;
    }
    addPosition(v) {
        this.transform.position = this.transform.position.add(v);
    }
    getRotation() {
        return this.transform.rotation;
    }
    setRotation(rotation) {
        this.transform.rotation = rotation;
    }
    render(ctx, canvas) {
        for (let i in this.components) {
            this.components[i].render(ctx, canvas);
        }
    }
    update(delta = 0) {
        for (let i in this.components) {
            this.components[i].update(delta);
        }
    }
    destroy() {
        LUMO_ENGINE2.scene.objects.splice(LUMO_ENGINE2.scene.objects.indexOf(this), 1);
    }
    start() {
        for (let i in this.components) {
            this.components[i].start();
        }
    }
}
