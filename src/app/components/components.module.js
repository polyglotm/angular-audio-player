'use strict';

import './side-nav/side-nav.module';
import './lcd-header/lcd-header.module';
import './lcd-footer/lcd-footer.module';

export default
  angular.module('lc.components', [
    'lc.components.SideNav',
    'lc.components.LcdHeader',
    'lc.components.LcdFooter'
  ]);
