/** indexApp.js */

// module
var app = angular.module('jsdtApp', ['ngRoute']);

//configure routes
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })
    .when('/about', {
      templateUrl: 'pages/about.html',
      controller: 'aboutController'
    })
    .when('/contact', {
      templateUrl: 'pages/contact.html',
      controller: 'contactController'
    });
  // use HTML5 History API to rewrite urls 
  $locationProvider.html5Mode(true);
});

//controllers with injected angular $scope
app.controller('mainController', function ($scope) {
  // create a message to display in our view
  $scope.message = 'Learn more about JSDT at https://wiki.eclipse.org/JSDT';
});

app.controller('aboutController', function ($scope) {
  $scope.message = 'The JavaScript Development Tools (JSDT) \
    	provide plug-ins for an IDE supporting JavaScript development.';
});

app.controller('contactController', function ($scope) {
  $scope.message = 'Please, get in touch with open source development.';
});