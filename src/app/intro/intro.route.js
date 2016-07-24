'use strict';

export default function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home.intro', {
      url: 'intro',
      templateUrl: 'app/intro/intro.html'
    });
}
