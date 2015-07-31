'use strict';

var app = angular.module('CatalogApp', ['ngMaterial'
    ]);

app.controller('OffersCtrl', ['$scope', function($scope){
  
  
  var offersList = [
    {offerId: '101',name: "Digital TV starter .", description:""},
    {offerId: '102',name: "Internet 150 starter.", description:""},
    {offerId: '103',name: "Mobile  Super", description:""},
    {offerId: '104',name: "Voice", description:""},

  ];

  $scope.offersList = offersList;
});
