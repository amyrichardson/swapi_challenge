var swapiApp = angular.module('swapiApp', ['ngRoute', 'ngMaterial']);

// app configuration
swapiApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.view.html',
            controller: 'SearchController as vm'
        })
        .when('/favorites', {
            templateUrl: '/views/favorites.view.html',
            controller: 'FavoritesController as vm'
        })
        .otherwise(
            { redirectTo: '/search' }
        );
});