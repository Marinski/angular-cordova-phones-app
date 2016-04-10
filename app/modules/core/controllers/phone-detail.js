'use strict';
/**
 * @ngdoc object
 * @name core.Controllers.PhoneDetailController
 * @description PhoneDetailController
 * @requires ng.$scope
 */
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