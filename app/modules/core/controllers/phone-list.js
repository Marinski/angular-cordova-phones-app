'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.PhoneListController
 * @description PhoneListController
 * @requires ng.$scope
 */
angular.module('core').controller('PhoneListController', ['$scope', 'Phone',
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }
]);