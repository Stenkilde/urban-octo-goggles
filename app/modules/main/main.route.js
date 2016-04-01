(function () {
    'use strict';

    angular.module('tattooGame')
        /* @ngInject */
        .config(function ($stateProvider) {

            var Index = {
                name: 'application.game ',
                url: '/',
                views: {
                    'main@application': {
                        templateUrl: 'modules/main/index/index.template.html',
                        controller: 'Index',
                        controllerAs: 'index'
                    }
                }
            };

            //var Join = {
            //    name: 'application.main',
            //    url: '/',
            //    views: {
            //        'main@application': {
            //            templateUrl: 'modules/main/join/join.template.html',
            //            controller: 'Join',
            //            controllerAs: 'join'
            //        }
            //    }
            //};

            $stateProvider.state(Index);
            //$stateProvider.state(Join);
        });
})();
