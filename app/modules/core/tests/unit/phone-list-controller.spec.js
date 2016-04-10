'use strict';

describe('Controller: PhoneListController', function() {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var PhoneListController,
        scope;

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        PhoneListController = $controller('PhoneListController', {
        $scope: scope
        });
    }));

    it('should ...', function() {

    });
});
