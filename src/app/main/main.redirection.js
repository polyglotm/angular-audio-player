'use strict';

export default function redirection($urlRouterProvider) {
  'ngInject';

  $urlRouterProvider
    .when('/', '/intro')
    .otherwise(routerCallback);

  function routerCallback($injector, $location) {

    let state = $injector.get('$state');
    state.go('home.intro');

    return $location.path();
  }
}
