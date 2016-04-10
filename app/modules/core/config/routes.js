'use strict';
/**
 * @ngdoc object
 * @name core.config
 * @requires ng.$stateProvider
 * @requires ng.$urlRouterProvider
 * @description Defines the routes and other config within the core module
 */
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/phones');
        /**
         * @ngdoc event
         * @name core.config.route
         * @eventOf core.config
         * @description
         *
         * Define routes and the associated paths
         *
         * - When the path is `'/'`, route to home
         * */
        /**
         * @ngdoc event
         * @name core.config.route
         * @eventOf core.config
         * @description
         *
         * Define routes and the associated paths
         *
         * - When the state is `'phone-detail'`, route to phone-detail
         *
         */
        /**
         * @ngdoc event
         * @name core.config.route
         * @eventOf core.config
         * @description
         *
         * Define routes and the associated paths
         *
         * - When the state is `'phone-list'`, route to phone-list
         *
         */
        $stateProvider.state('phone-list', {
            url: '/phones',
            templateUrl: 'modules/core/views/phone-list.html',
            controller: 'PhoneListController'
        }).
        state('phone-detail', {
            url: '/phones/:phoneId',
            templateUrl: 'modules/core/views/phone-detail.html',
            controller: 'PhoneDetailController'
        });
    }
]);