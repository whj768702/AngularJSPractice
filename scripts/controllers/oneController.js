define(['./controllers'], function (mode) {
	'use strict';

    function oneController($scope){
        $scope.message = 'hello, oneController';
    };

    // return oneController;

    mode.controller('oneController', oneController);
});