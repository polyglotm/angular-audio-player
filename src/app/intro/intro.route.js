'use strict';

import IntroController from './intro.controller';

export default function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home.intro', {
      url: 'intro',
      templateUrl: 'app/intro/intro.html',
      controller: IntroController,
      controllerAs: 'introVm'
    });
}
