'use strict';

/**
 * @ngdoc function
 * @name simplicityExplainedApp.controller:ConceptCtrl
 * @description
 * # ConceptCtrl
 * Controller of the simplicityExplainedApp
 */
angular.module('simplicityExplainedApp')
  .controller('ConceptCtrl', function ($scope, $routeParams, $location) {
    $scope.conceptName = $routeParams.conceptname;
    $scope.conceptItem = concepts.find(function(c) {
      return c.name == $scope.conceptName;
    });
    $scope.concepts = concepts;
  });
