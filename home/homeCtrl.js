(function(){
    'use strict';
    angular.module('appNakul').controller('homeCtrl',['$scope','$rootScope','$routeParams','$route', '$location', function($scope,$rootScope,$routeParams,$route,$location){

        init();

        function init(){

            if (typeof $.fn.fullpage.destroy == 'function'){
                $.fn.fullpage.destroy('all');

            }

            $('#fullpage').fullpage({

                scrollBar :true


                // https://github.com/alvarotrigo/fullPage.js

                });


        }


        // $scope.isScreenSize = screenSize.is;

    }]);

})();