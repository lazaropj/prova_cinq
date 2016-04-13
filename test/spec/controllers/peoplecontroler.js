'use strict';

describe('Controller: PeoplecontrolerCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var PeoplecontrolerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PeoplecontrolerCtrl = $controller('PeoplecontrolerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PeoplecontrolerCtrl.awesomeThings.length).toBe(3);
  });
});
