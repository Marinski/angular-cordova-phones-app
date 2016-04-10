'use strict';

describe('Controller: PhoneDetailController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var PhoneDetailController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PhoneDetailController = $controller('PhoneDetailController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
