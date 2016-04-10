'use strict';
var ApplicationConfiguration = (function() {
    var applicationModuleName = 'angularjsapp';
    var applicationModuleVendorDependencies = [
        'ngResource',
        
        'ngCookies', 
        
        'ngAnimate', 
        
        'ngTouch', 
        
        'ngSanitize', 
        'ui.router',
        'ui.bootstrap',
        'ui.utils'
    ];
    var registerModule = function(moduleName) {
        angular
            .module(moduleName, []);
        angular
            .module(applicationModuleName)
            .requires
            .push(moduleName);
    };

    return {
        applicationModuleName: applicationModuleName,
        applicationModuleVendorDependencies: applicationModuleVendorDependencies,
        registerModule: registerModule
    };
})();

'use strict';

angular
    .module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

angular
    .module(ApplicationConfiguration.applicationModuleName)
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
angular
    .element(document)
    .ready(function() {
        if (window.location.hash === '#_=_') {
            window.location.hash = '#!';
        }
        angular
            .bootstrap(document,
                [ApplicationConfiguration.applicationModuleName]);
    });

'use strict';

ApplicationConfiguration.registerModule('core');

'use strict';
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/phones');
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
'use strict';
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
'use strict';
angular.module('core').filter('checkmark', [
    function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    }
]);
'use strict';
angular.module('core').controller('PhoneDetailController', ['$scope', '$stateParams', 'Phone',
    function($scope, $stateParams, Phone) {
        $scope.phone = Phone.get({
            phoneId: $stateParams.phoneId
        }, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }
]);
'use strict';
angular.module('core').controller('PhoneListController', ['$scope', 'Phone',
    function($scope, Phone) {
        $scope.phones = Phone.query();
        $scope.orderProp = 'age';
    }
]);