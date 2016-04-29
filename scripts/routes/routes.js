'use strict';

define(['app', 'angular-ui-router'], function(app){
	app.config(['$stateProvider', function($stateProvider){
		var provider = $stateProvider.state('one', {
			abstract: false,
			url: '/one'
		});
	}]);
});