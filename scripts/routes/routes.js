
define(['./state'], function(app){
    'use strict';

    // return app.config(['$stateProvider', function ($stateProvider) {
    //     $stateProvider.state('view1', {
    //         url:'/view1',
    //         templateUrl: 'view/one.html',
    //         controller: 'MyCtrl1'
    //     }).state('view2', {
    //         url: '/view1',
    //         templateUrl: 'view/two.html',
    //         controller: 'MyCtrl2'
    //     });
    return app.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/view1', {
            templateUrl: 'view/one.html',
            controller: 'MyCtrl1'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'view/two.html',
            controller: 'MyCtrl2'
        });

        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }]);
});