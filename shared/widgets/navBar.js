/**
 * Created by nakulchawla on 11/10/16.
 */
(function () {
    angular.module('appNakul').directive('nkNavBar', function () {
        return {
            restrict: 'AE',
            controller: 'homeCtrl',
            replace: 'true',
            templateUrl: 'shared/widgets/navBar.html',
            link: function (scope, element) {
                var items = element.find('li');
                items.on('click', function () {
                    items.removeClass('active');
                    $(this).addClass('active');
                });
            }

        };

    });


    angular.module('appNakul').directive('nkNavBarFooter', function () {
        return {

            restrict: 'AE',
            controller: 'homeCtrl',
            replace: 'true',
            templateUrl: 'shared/widgets/navBarFooter.html',
            link: function (scope, element) {
                var items = element.find('li');
                items.on('click', function () {
                    items.removeClass('active');
                    $(this).addClass('active');
                });
            }


        };


    });

}());