'use strict';

import secondsToDateTime from './seconds-to-date-time/seconds-to-date-time';

export default
  angular.module('lc.common.components.LcAudioPlayer.filters', [])
    .filter('secondsToDateTime', secondsToDateTime);
