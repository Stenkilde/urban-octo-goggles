var app = angular.module('tattooGame', ['ui.router', 'cgBusy']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
});
