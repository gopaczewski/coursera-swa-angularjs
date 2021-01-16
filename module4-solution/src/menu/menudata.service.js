(function() {
'use strict';

angular.module('data')
    .service('MenuDataService', MenuDataService);

})();

MenuDataService.$inject = ['$http', 'menuDataBaseURL'];
function MenuDataService($http, menuDataBaseURL) {
    var $svc = this;

    $svc.getAllCategories = function() {
        return $http.get(menuDataBaseURL + '/categories.json')
            .then(response => response.data);
    }

    $svc.getItemsForCategory = function(catLetterId) {
        return $http.get(menuDataBaseURL + '/menu_items.json?category=' + catLetterId)
            .then(response => response.data);

    }
}