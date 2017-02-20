/**
 * Created by nakulchawla on 11/10/16.
 */

(function(){
   'use strict';
    angular.module('appNakul').controller('resumeCtrl', ['$scope','$rootScope','$routeParams','$route', 
        function($scope,$rootScope,$routeParams,$route) {


        init();

        function init(){

            if (typeof $.fn.fullpage.destroy == 'function'){
                $.fn.fullpage.destroy('all');

            }

        }

    }]);

})();
