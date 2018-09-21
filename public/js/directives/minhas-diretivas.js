angular.module('minhasDiretivas', [])
    .directive('personagemCard', function () {
        console.log("personagemCard-directive1");
        return {
            restric: "AE",
            require: 'ngModel',
            transclude: true,
            templateUrl: 'partials/personagem-painel.html',
            scope: {
                nome: '@'
            }
        }
    });
