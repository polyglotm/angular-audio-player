/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

import './common/common.module';
import './components/components.module';

import './main/main.module';
import './intro/intro.module';
import './example-1/example-1.module';

angular.module('lcAudioPlayer', [
  'ngAnimate', 
  'ngCookies', 
  'ngTouch', 
  'ngSanitize', 
  'ngMessages', 
  'ngAria', 
  'restangular', 
  'ui.router', 
  'ui.bootstrap', 
  'toastr',

  'ngAudio',
  'rzModule',

  'lc.common',
  'lc.components',
  'lc.main',
  'lc.intro',
  'lc.example.example1'
])
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController);
