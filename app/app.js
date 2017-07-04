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
		.when('/github', {
			templateUrl: 'components/github/github.html',
			controller: 'githubController'
		});
});

myApp.controller('mainController', function($scope) {
});

myApp.controller('githubController', function($scope) {
});

myApp.controller('formController', ['$scope', function($scope) {
	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	};

}]);


