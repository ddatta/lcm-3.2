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

var app = angular.module('CatalogApp', ['ngMaterial', 'ngRoute'
    ]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink');
});

/*app.config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise("/main/tab1");
 
    $stateProvider
        .state("main", { abstract: true, url:"/main", templateUrl:"main.html" })
            .state("main.overview", { url: "/overview", templateUrl: "views/overview.html" })
            .state("main.offers", { url: "/offers", templateUrl: "views/offers.html" })
            .state("main.specifications", { url: "/specifications", templateUrl: "views/specifications.html" });
});*/

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/overview', {
          templateUrl: 'views/overview.html'
      }).
      when('/offers', {
        templateUrl: 'views/offers.html'
    }).
      when('/specifications', {
        templateUrl: 'views/specifications.html'
      }).
      when('/prices', {
        templateUrl: 'views/prices.html'
      }).
      otherwise({
        redirectTo: '/overview'
      });
}]);

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$location',function($scope, $mdSidenav, $location){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  
  var menuItems = [
    {title: 'Overview',content: "TThis is the Overview tab.", route:"/overview"},
    {title: 'Offers',content: "TThis is the Offers tab.", route:"/offers"},
    {title: 'Specifications',content: "TThis is the Specifications tab.", route:"/specifications"}

  ];

  $scope.menuItems = menuItems;

  var tabs = [
          { title: 'Overview', content: "TThis is the Overview tab.", route:'overview'}
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

    $scope.menuItemsClicked = function(title,route) {
        $scope.addTab(title,title);

        $location.path(route);
    };
 
}]);


