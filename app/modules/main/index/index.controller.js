(function () {
    'use strict';

    angular
        .module('tattooGame')
        .controller('Index', Index);

    /* @ngInject */
    function Index(DiscoverFactory) {
        /*jshint validthis: true */
        var vm = this;
        vm.discover = [];
        vm.singleDiscover = {};
        vm.arrayLength = null;

        // Functions
        vm.getRandomCard = getRandomCard;

        activate();

        function activate() {
            getRandomCard();
        }

        function getRandomCard() {
            DiscoverFactory.getImages().then(function success(response) {
                vm.discover = response.data;
                vm.arrayLength = vm.discover.length;
                vm.singleDiscover = vm.discover[Math.floor(Math.random() * vm.arrayLength)];
            });


        }

    }

})();
