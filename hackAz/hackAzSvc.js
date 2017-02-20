/**
 * Created by nakulchawla on 1/14/17.
 */
(function(){
    'use strict';
    angular.module('appNakul').factory('hackAzSvc',['resourceFactory',
        function(resourceFactory){

            var hackAzResource = resourceFactory.hackAzResource;

            var getData = function(){
                return hackAzResource.query();
            };


            return {

              getData : getData
            };




    }]);


}());
