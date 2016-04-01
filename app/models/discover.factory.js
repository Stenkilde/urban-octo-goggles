(function () {
    'use strict';

    angular
        .module('tattooGame')
        .factory('DiscoverFactory', DiscoverFactory);

    function DiscoverFactory($http) {
        var service = {
            getImages: getImages
        };

        var API_URL = 'http://app.api.sta.tattoodo.com/v1/app/';
        var PARAMS = 'includes=user&length50';

        return service;

        function getImages() {
            return $http.get(API_URL + 'images?' + PARAMS).then(function(response) {
                return response.data;
            });
        }

    }

})();
