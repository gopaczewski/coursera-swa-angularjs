(function() {
'use strict';

angular.module('MenuApp')
    .component('menuCategories', {
        templateUrl: 'src/menu/templates/menu-categories.html',
        controller: CategoriesController,
        bindings: {
            categories: '<'
        }
    });

})();

function CategoriesController() {
    var $ctrl = this;
    console.log("Initializing CategoriesController...");
}