'use strict';

/**
 * @ngdoc service
 * @name frontendApp.peopleService
 * @description
 * # peopleService
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('peopleService', function ($resource) {    
    return $resource('http://localhost:3000/rest/:action', {}, {
      findAll: {params: {action: 'people'}, method: 'GET', isArray: true}
    });
  });
