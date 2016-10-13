define(['../app'], function(app){
    'use strict';

     app.directive('helloWorld', function(){
        return {
            template: "<h1>hello world</h1>"
        }
    });
});