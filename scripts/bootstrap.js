define([
    'require',
    'angular',
    'app',
    './routes/routes'
], function(require,angular){
    'use strict';

    require(['domReady!'], function(document){
        angular.bootstrap(document, ['appW']);
    });
});
