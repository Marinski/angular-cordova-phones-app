'use strict';
/**
 * @ngdoc filter
 * @name core.Filters.checkmark
 * @description checkmark filter
 */
angular.module('core').filter('checkmark', [
    function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    }
]);