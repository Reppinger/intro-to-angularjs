var app = angular.module('app', ['ngRoute']);

// controller here
app.controller('StoogeController', function($scope) {
  $scope.stooges = ['larry', 'curly', 'moe']
});

// routes here
app.config(function($routeProvider) {
	$routeProvider.when('/stooges', {
		controller: 'StoogeController', //'StoogeController as stooge'
		templateUrl: 'stooges.html'
	});
	// $routeProvider.otherwise({
	// 	redirectTo: '/stooges'
	// })
})
