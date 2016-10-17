
define(['./controllers'], function(controllers){
    'use strict';

    controllers.controller('MyCtrl1', ['$scope', function($scope){
        $scope.hello = 'hello';
        console.log($scope.hello);
    }]);
});