'use strict';

import lcAudioPlayerComponent from './lc-audio-player.component';
import './filters/filters.module';

export default
  angular.module('lcAudioPlayer', [
    'lc.common.components.LcAudioPlayer.filters'
  ]).component('lcAudioPlayer', lcAudioPlayerComponent());
