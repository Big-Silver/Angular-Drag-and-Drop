'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  '720kb.socialshare',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ang-drag-drop',
  'dndLists'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

