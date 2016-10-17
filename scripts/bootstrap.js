define([
    'require',
    'angular',
    'app',
    './routes/base',
    './controllers/base'
], function(require,angular){
    'use strict';

    require(['domReady!'], function(document){
        angular.bootstrap(document, ['app']);
    });
});
