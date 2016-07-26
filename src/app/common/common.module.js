'use strict';

import './components/components.module'
import './constants/constants.module';

export default
  angular.module('lc.common', [
    'lc.common.components',
    'lc.common.constants'
  ]);
