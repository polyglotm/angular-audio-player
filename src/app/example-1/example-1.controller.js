'use strict';

export default class Example1Controller {
  constructor() {

    this.exampleAudio1 = {
      audioSrc: '../assets/audios/Pastel-Shade-01-if-you-can-stop-that`s-not-love-320k.mp3',
      audioFilename: 'Pastel-Shade-01-if-you-can-stop-that`s-not-love-320k.mp3'
    }

    this.exampleAudio2 = {
      audioSrc: '../assets/audios/EFIX & Kokenn - Louise (Feat Edgar).mp3'
    }

    this.exampleAudio3 = {
      audioSrc: '../assets/audios/uneasy-dream(a-bittersweet-life-ost).mp3',
      audioFilename: 'uneasy-dream(a-bittersweet-life-ost).mp3',
      options: {
        tooltip: false
      }
    }
  }
}
