'use strict';

describe('Service: peopleService', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var peopleService;
  beforeEach(inject(function (_peopleService_) {
    peopleService = _peopleService_;
  }));

  it('should do something', function () {
    expect(!!peopleService).toBe(true);
  });

});
