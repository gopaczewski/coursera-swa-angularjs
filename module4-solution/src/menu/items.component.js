(function() {

angular.module('MenuApp')
    .component('menuItems', {
        templateUrl: 'src/menu/templates/menu-items.html',
        controller: ItemsController,
        bindings: {
            categoryItems: '<',
        }
    })

})();

function ItemsController() {
    var $ctrl = this;
}