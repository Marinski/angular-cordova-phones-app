'use strict';
/**
 * @ngdoc service
 * @name core.Services.PhoneService
 * @description PhoneService Service
 */
angular.module('core').factory('Phone', ['$resource',
    function($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: {
                    phoneId: 'phones'
                },
                isArray: true
            }
        });
    }
]);