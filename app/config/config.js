var app = angular.module('tattooGame', ['ui.router', 'btford.socket-io']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
});
