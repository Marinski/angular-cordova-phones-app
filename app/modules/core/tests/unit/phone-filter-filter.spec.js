'use strict';

describe('Filter: PhoneFilter', function () {

    //Load the ui.router module
    beforeEach(module('ui.router'));
    //Load the module
    beforeEach(module('core'));

    var PhoneFilter;

    beforeEach(inject(function ($filter) {
        PhoneFilter = $filter('phoneFilter');
    }));

    it('should ...', function () {

    });

});
