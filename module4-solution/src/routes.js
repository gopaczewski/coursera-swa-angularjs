(function() {
'use strict';

angular.module('MenuApp')
    .config(RoutesConfig);

})();

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    // NOTE: This is still AngularJS 1.x but uses components with the ui-router
    // as is preferred with the latest ui-router version

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/menu/templates/home.template.html'
        })
        .state('categories', {
            url: '/categories',
            component: 'menuCategories',
            resolve: {
                categories: function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }
            }
        })
        .state('items', {
            url: '/category/{catLetterId}/items?',
            component: 'menuItems',
            resolve: {
                categoryItems: ['$stateParams', 'MenuDataService',
                 function($stateParams, MenuDataService) {
                    return MenuDataService.getItemsForCategory($stateParams.catLetterId);
                }]
            }
        });
}