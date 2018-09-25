angular.module('dbzmod', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function($routeProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $routeProvider.when('/personagens', {
            templateUrl: 'partials/principal.html',
            controller: 'PersonagensController',
            controllerAs: 'vm'
        });

        $routeProvider.when('/personagens/new', {
            templateUrl: 'partials/criar-personagem.html',
            controller: 'CriacaoController',
            controllerAs: 'vm'
        });

        $routeProvider.otherwise({ redirectTo: '/personagens'})


    });

/*
Loval provider retira a necessidade de usar # no endereço da pagina... mas precisa estar config no back
    (...)$locationProvider){

        $locationProvider.html5Mode(true);
    (...)
*/