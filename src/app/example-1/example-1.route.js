'use strict';

export default function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home.example1', {
      url: 'example1',
      templateUrl: 'app/example-1/example-1.html'
    });
}
