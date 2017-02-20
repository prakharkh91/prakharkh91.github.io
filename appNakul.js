(function () {
    'use strict';
    angular.module('appNakul', ['ngRoute','ngResource'])
        .config(function ($routeProvider,$httpProvider) {
            $routeProvider.when('/home', {
                title: 'Nakul Chawla',
                templateUrl: 'home/home.html',
                controller: 'homeCtrl'
            })
                .when('/resume', {
                    title: 'Resume',
                    templateUrl: 'resume/resume.html',
                    controller: 'resumeCtrl'
                })
                .when('/', {
                    title: 'Nakul Chawla',
                    templateUrl: 'home/home.html',
                    controller: 'homeCtrl'

                })
                .when('/quote',{
                    title: 'hack Arizona',
                    templateUrl: 'hackAz/hackAz.html',
                    controller: 'hackAzCtrl'

                })

                .otherwise({
                    redirectTo: '/home'
                });
            // $httpProvider.interceptors.push('httpInterceptor');
        })
        .run(function ($rootScope) {
            $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
                document.title = current.title;

            });
        });
}());


