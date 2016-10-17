define([
    'require',
    'angular',
    'app',
    './routes/routes',
    './controllers/index'
], function(require,angular){
    'use strict';

    require(['domReady!'], function(document){
        angular.bootstrap(document, ['appW']);
    });
});
