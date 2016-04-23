var app = angular.module('myApp', []);

app.controller('oneController', ['$scope', function($scope){
	$scope.message = 'hello, oneController';
}]);