'use strict';

/**
 * @ngdoc overview
 * @name simplicityExplainedApp
 * @description
 * # simplicityExplainedApp
 *
 * Main module of the application.
 */
angular
  .module('simplicityExplainedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/concept/:conceptname', {
        templateUrl: 'views/concept.html',
        controller: 'ConceptCtrl',
        controllerAs: 'concept'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
