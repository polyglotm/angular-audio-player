'use strict';

export default class IntroController {
  constructor(S3_AUDIO_LIST) {
    'ngInject';

    this.audio = {
      audioSrc : 'assets/audios/Pastel-Shade-01-Longing-displace-320k.mp3',
      audioS3Src : S3_AUDIO_LIST.s1
    }
  }
}
