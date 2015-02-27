angular.module('my-mean-bootstrap-project', ['ngRoute'])
	.config(function($routeProvider) {

		$routeProvider.when('/home', {
			templateUrl: 'partials/home.html',
			controller: 'HomeController'
		});

		$routeProvider.otherwise({redirectTo: '/home'});

	});