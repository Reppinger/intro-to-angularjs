var app = angular.module('app', []);

// controller here
app.controller('FirstController', ['$scope', 
	function($scope) {
		$scope.dynamic = 'yes'
	}
	]);