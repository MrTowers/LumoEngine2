/**
 * Copyright LumoEngine2 by Dawid Twers
 * www.github/MrTowers
 */
import { LUMO_ENGINE2 } from "../../LumoEngine2.js";
import { clamp } from "../functions/math/clamp.js";
import { Component } from "../objects/Component.js";
export class AudioCue extends Component {
    constructor(audio, volume = 1, pitch = 1) {
        super();
        this.volume = volume;
        this.pitch = pitch;
        this.positionVolume = false;
        this.positionStereo = false;
        this.positionVolumeDistance = 1000;
        this.positionStereoDistance = 1000;
        this.audio = audio;
        this.audioCTX = new AudioContext();
        this.panner = this.audioCTX.createStereoPanner();
        this.source = this.audioCTX.createMediaElementSource(this.audio);
        //connecting
        this.source.connect(this.panner).connect(this.audioCTX.destination);
    }
    play() {
        this.audio.play();
    }
    stop() {
        this.audio.pause();
    }
    update() {
        if (this.positionVolume) {
            let dist = LUMO_ENGINE2.camera.position.distance(this.gameObject.getPosition());
            this.audio.volume = clamp(1 - (dist / this.positionVolumeDistance), 0, 1);
        }
        else {
            this.audio.volume = this.volume;
        }
        if (this.positionStereo) {
            let dif = this.gameObject.getPosition().x - LUMO_ENGINE2.camera.position.x;
            this.panner.pan.value = clamp(dif / this.positionStereoDistance, -1, 1);
        }
        else {
            this.panner.pan.value = 0;
        }
    }
}
