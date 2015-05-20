var app = angular.module('app', ['ngRoute']);

// controller here
app.controller('FirstController', function($scope) {
  $scope.stooges = ['larry', 'curly', 'moe']
});

// routes here
app.config(function($routeProvider) {
	$routeProvider.when('/stooges', {
		controller: 'FirstController',
		templateUrl: 'stooges.html'
	});
	// $routeProvider.otherwise({
	// 	redirectTo: '/stooges'
	// })
})
