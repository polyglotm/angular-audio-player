'use strict';

export default class IntroController {
  constructor(S3_AUDIO_LIST) {
    'ngInject';

    this.audio = {
      audioS3Src : S3_AUDIO_LIST.s1
    }
  }
}
