(function() {
'use strict';

angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

})();

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.items = '';
    $scope.check = function() {   
        itemsArr = $scope.items.split(",")
            .filter(x => x.trim().length > 0);

        if (itemsArr.length > 3) {
            $scope.message = 'Too much!';
        } else if (itemsArr.length > 0) {
            $scope.message = 'Enjoy!';
        } else {
            $scope.message = 'Please enter data first';;
        }
    }
}