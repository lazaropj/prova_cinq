'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:PeoplecontrolerCtrl
 * @description
 * # PeoplecontrolerCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('PeoplecontrolerCtrl', function ($scope, peopleService, $http) {
    
    $scope.findAll = function() {    	
    	peopleService.findAll({}, function (result) {        
        $scope.peoples = result;
      }, function () {
        alert('Internal Error. Please, contact IT team.');
      });   	

    };

  });
