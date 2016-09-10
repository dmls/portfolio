'use strict';

// create myApp module
	// include ng-route for routing needs
var myApp = angular.module('myApp', ['ngRoute']);

// configure routes
myApp.config(function ($routeProvider) {
	$routeProvider
		// home page
		.when('/', {
			templateUrl: 'components/home/home.html',
			controller: 'mainController'
		})

		// portfolio page
		.when('/portfolio', {
			templateUrl: 'components/portfolio/portfolio.html',
			controller: 'portfolioController'
		});
});

myApp.controller('mainController', function($scope) {
});

myApp.controller('portfolioController', function($scope) {
});
