var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
		.state('create', {
            url: '/create',
            controller: 'userController',
			templateUrl: 'views/create.html'
        }).state('home', {
            url: '/home',
            templateUrl: 'views/index.html'
        }).state('users', {
            url: '/list',
            controller: 'userController',
            templateUrl: 'views/lists.html'
        }).state("edit", {
            url: "/edit/:id",
            templateUrl: "/views/create.html",
            controller: "userController"
        });
        
}).constant("globalConfig", {
    apiAddress: 'http://localhost:3000/api'
});