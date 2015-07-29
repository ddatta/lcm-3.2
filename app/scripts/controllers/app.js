'use strict';

/**
 * @ngdoc overview
 * @name lcm32App
 * @description
 * # lcm32App
 *
 * Main module of the application.
 */
/*angular
  .module('lcm32App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .otherwise({
        redirectTo: '/'
      });
  });*/

var app = angular.module('CatalogApp', ['ngMaterial', 'ui.router'
    ]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink');
});

app.config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise("/home");
 
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'views/overview.html'
        })
        
        .state("home.overview", { url: "/home/overview", templateUrl: "views/overview.html" })
        .state("home.offers", { url: "/home/offers", templateUrl: "views/offers.html" })
        .state("home.specifications", { url: "/home/specifications", templateUrl: "views/specifications.html" });
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  
  var tabs = [
          { title: 'Overview', content: "TThis is the Overview tab.", route:'main.overview'}
        ],
        selected = null,
        previous = null;
    $scope.tabs = tabs;
    $scope.selectedIndex = 1;
    $scope.$watch('selectedIndex', function(current, old){
      previous = selected;
      selected = tabs[current];
      //if ( old + 1 && (old != current)) $log.debug('Goodbye ' + previous.title + '!');
      //if ( current + 1 )                $log.debug('Hello ' + selected.title + '!');
    });

    $scope.addTab = function (title, view) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, disabled: false});
    $scope.selectedIndex = tabs.length;
    };
    
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };
 
}]);


