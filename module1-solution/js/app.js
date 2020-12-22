(function() {
'use strict';

angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

})();

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.items = '';
    $scope.messagefont = 'invalid-input';
    $scope.check = function() {   
        itemsArr = $scope.items.split(",")
            .filter(x => x.trim().length > 0);

        if (itemsArr.length > 3) {
            $scope.message = 'Too much!';
            $scope.messagefont = 'valid-input';
        } else if (itemsArr.length > 0) {
            $scope.message = 'Enjoy!';
            $scope.messagefont = 'valid-input';
        } else {
            $scope.message = 'Please enter data first';
            $scope.messagefont = 'invalid-input';
        }
    }
}