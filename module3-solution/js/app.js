(function() {
'use strict';

angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', function() {
        return {
            restrict: 'E',
            templateUrl: 'found-items.html',
            scope: {
                items: '<',
                removeItem: '&onRemove'
            }
        };
    });
})();

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
    var svc = this;

    svc.getMatchedMenuItems = function(searchTerm) {
        return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            }).then(function (result) {
            return result.data.menu_items
                    .filter(item => item.description.includes(searchTerm));
        });
    }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var controller = this;
    
    controller.noResults = false;
    controller.search = function(query) {
        if (!query) {
            controller.noResults = true;
        } else {
            MenuSearchService.getMatchedMenuItems(query)
                .then(function(matchingItems) {
                    console.log('HTTP result: ' + matchingItems);
                    controller.found = matchingItems;
                    controller.noResults = matchingItems.length === 0;
                });
        }
    }
    controller.removeItem = function(index) {        
        console.log('Removing item');
        controller.found.splice(index, 1);
    }
}