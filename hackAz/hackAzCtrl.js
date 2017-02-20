(function () {
    'use strict';
    angular.module('appNakul').controller('hackAzCtrl', ['$scope', '$rootScope', '$routeParams', '$route', '$location', 'hackAzSvc', function ($scope, $rootScope, $routeParams, $route, $location, hackAzSvc) {


        init();

        function init() {

            getServiceData();

        }

        function getServiceData() {


            $scope.places = [
                {
                    destination: "Beijing",
                    departureDate: "2017-01-23T21:25",
                    fare: "1220"
                },
                {
                    destination: "Paris",
                    departureDate: "2017-01-23T21:25",
                    fare: "1350"
                },
                {
                    destination: "London",
                    departureDate: "2017-01-23T21:25",
                    fare: "1500"
                }
            ]

            $(function() {
                $('#nav > div').hover(
                    function () {
                        var $this = $(this);
                        $this.find('img').stop().animate({
                            'width'     :'199px',
                            'height'    :'199px',
                            'top'       :'-25px',
                            'left'      :'-25px',
                            'opacity'   :'1.0'
                        },500,'easeOutBack',function(){
                            $(this).parent().find('ul').fadeIn(700);
                        });

                        $this.find('a:first,h2').addClass('active');
                    },
                    function () {
                        var $this = $(this);
                        $this.find('ul').fadeOut(500);
                        $this.find('img').stop().animate({
                            'width'     :'52px',
                            'height'    :'52px',
                            'top'       :'0px',
                            'left'      :'0px',
                            'opacity'   :'0.1'
                        },5000,'easeOutBack');

                        $this.find('a:first,h2').removeClass('active');
                    }
                );
            });
            // $rootScope.spinning = true;
            // hackAzSvc.getData().$promise.then(function (data) {
            //
            //     console.log(data);
            //     // $scope.places = data;
            //
            //     // $scope.fare =
            //
            //     $scope.places = [
            //         {
            //             destination: "Beijing",
            //             departureDate: "2017-01-23T21:25",
            //             fare: "1120"
            //         },
            //         {
            //             destination: "Beijing",
            //             departureDate: "2017-01-23T21:25",
            //             fare: "1120"
            //         },
            //         {
            //             destination: "Beijing",
            //             departureDate: "2017-01-23T21:25",
            //             fare: "1120"
            //         }
            //     ]
            //
            //
            //     $rootScope.spinning = false;
            //
            // }, function (error) {
            //
            //     $rootScope.spinning = false;
            // });

        }


    }]);

}());
