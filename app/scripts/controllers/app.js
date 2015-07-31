'use strict';

var app = angular.module('CatalogApp', ['ngMaterial', 'ui.router'
    ]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('pink');
});

app.config(function($stateProvider, $urlRouterProvider){
 
    $urlRouterProvider.otherwise("/overview");
 
    $stateProvider
        .state("main", { abstract: true, url:"", templateUrl:"views/main.html" })
            .state("main.overview", { url: "/overview", templateUrl: "views/overview.html" })
            .state("main.offers", { url: "/offers", templateUrl: "views/offers.html" })
            .state("main.specifications", { url: "/specifications", templateUrl: "views/specifications.html" })
            .state("main.prices", { url: "/prices", templateUrl: "views/prices.html" });
});
/*
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
*/
app.controller('AppCtrl', ['$scope', '$mdSidenav', '$location','$state',function($scope, $mdSidenav, $location, $state){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
  
  var menuItems = [
    {title: 'Overview',content: "TThis is the Overview tab.", route:'main.overview'},
    {title: 'Offers',content: "TThis is the Offers tab.", route:'main.offers'},
    {title: 'Specifications',content: "TThis is the Specifications tab.", route:'main.specifications'},
    {title: 'Prices',content: "TThis is the Prices tab.", route:'main.prices'}

  ];

  $scope.menuItems = menuItems;

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

    $scope.addTab = function (title, view, route) {
      view = view || title + " Content View";
      tabs.push({ title: title, content: view, route: route, disabled: false});
    $scope.selectedIndex = tabs.length;
    };
    
    $scope.removeTab = function (tab) {
      var index = tabs.indexOf(tab);
      tabs.splice(index, 1);
    };

    $scope.menuItemsClicked = function(title,route) {
        $scope.addTab(title,title,route);
        $state.go(route);
        //$location.path(route);
    };

    $scope.onTabSelect = function(tab) {
        //alert(tab.route);
        $state.go(tab.route);
        //$location.path(route);
    };
 
}]);


