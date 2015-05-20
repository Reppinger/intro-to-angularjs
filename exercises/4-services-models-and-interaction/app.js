var app = angular.module('app', ['ngRoute']);

// routes here
app.config(function($routeProvider) {
  $routeProvider.when('/logged-in', {
    controller: 'LogoutController',
    templateUrl: 'logged-in.html'
  });
  $routeProvider.when('/logged-out', {
    controller: 'LoginController',
    templateUrl: 'logged-out.html'
  });
  $routeProvider.otherwise({
   redirectTo: '/logged-out'
  })
});

// LoginController here
app.controller('LoginController', function($scope, AuthenticationService){
  $scope.credentials = { username: "",
                         password: "" };
  $scope.login = function() {
    AuthenticationService.login($scope.credentials);
  };
});

// LogoutController here
app.controller('LogoutController', function($scope, AuthenticationService){
  $scope.logout = function() {
    AuthenticationService.logout();
  }
});

app.service("AuthenticationService", function($location) {
  return {
    login: function(credentials) {
      if (credentials.username !== "ralph" || credentials.password !== "wiggum") {
        alert("Username must be 'ralph', password must be 'wiggum'");
      } else {
        $location.path('/logged-in');
      }
    },
    logout: function() {
      $location.path('/logged-out');
    }
  };
});
