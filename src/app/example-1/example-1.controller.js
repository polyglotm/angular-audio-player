'use strict';

export default class Example1Controller {
  constructor(S3_AUDIO_LIST) {
    'ngInject';

    this.exampleAudio1 = {
      audioS3Src: S3_AUDIO_LIST.s2,
      audioFilename: 'Pastel-Shade-01-if-you-can-stop-that`s-not-love-320k.mp3',
      doc: 
`<lc-audio-player 
  audio-src="/input/your/src/url"
  audio-filename="/input/your/file/name">
</lc-audio-player>`
    }

    this.exampleAudio2 = {
      audioS3Src: S3_AUDIO_LIST.s3,
      doc:
`<lc-audio-player 
  audio-src="/input/your/src/url">
</lc-audio-player>`
    }

    this.exampleAudio3 = {
      audioS3Src: S3_AUDIO_LIST.s4,
      audioFilename: 'uneasy-dream(a-bittersweet-life-ost).mp3',
      options: {
        tooltip: false
      },
      doc:
`<lc-audio-player 
  audio-src="/input/your/src/url"
  audio-filename="/input/your/file/name"
  options="{ tooltip : false }">
</lc-audio-player>`
    }
  }
}
