(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);
})();

function ShoppingListService() {
    var svc = this;
    var itemsToBuy = [
        { name: 'cookies', quantity: 4 },
        { name: 'milk', quantity: 1 },
        { name: 'donuts', quantity: 12 }, 
        { name: 'OJ', quantity: 1 },
        { name: 'sausage', quantity: 1 }
    ];
    var boughtItems = [];

    svc.getItemsToBuy = function() { return itemsToBuy; };
    svc.getBoughtItems = function() { return boughtItems; };
    svc.buyItem = function(itemIndex) {
        var bought = itemsToBuy.splice(itemIndex, 1);
        boughtItems.push(bought[0]);
    };
}

ToBuyController.$inject = ['ShoppingListService'];
function ToBuyController(ShoppingListService) {
    var tbc = this;
    tbc.buyItem = function(itemIndex) {
        ShoppingListService.buyItem(itemIndex);
    };
    tbc.items = ShoppingListService.getItemsToBuy();
}

AlreadyBoughtController.$inject = ['ShoppingListService'];
function AlreadyBoughtController(ShoppingListService) {
    var abc = this;
    abc.items = ShoppingListService.getBoughtItems();
}