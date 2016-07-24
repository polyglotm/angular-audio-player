'use strict';

import LcAudioPlayerController from './lc-audio-player.controller';

export default function lcAudioPlayerComponent() {
  return {
    templateUrl: 'app/common/components/lc-audio-player/lc-audio-player.html',
    controller: LcAudioPlayerController,
    controllerAs: 'lcAudioPlayerVm',
    bindings: {
      audioSrc: '=',
      audioFilename: '=?',
      autoPlay: '=?',
      options: '=?',
      isEditorMode: '=?'
    }
  }
}
