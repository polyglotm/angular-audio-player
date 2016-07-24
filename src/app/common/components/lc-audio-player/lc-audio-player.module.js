'use strict';

import lcAudioPlayerComponent from './lc-audio-player.component';
import './filters/filters.module';

export default
  angular.module('lc.common.components.LcAudioPlayer', [
    'lc.common.components.LcAudioPlayer.filters'
  ]).component('lcAudioPlayer', lcAudioPlayerComponent());
