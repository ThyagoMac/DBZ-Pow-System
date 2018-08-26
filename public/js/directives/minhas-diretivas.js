angular.module('minhasDiretivas', [])
    .directive('personagemPainel', function () {

        var ddo = {}; //directive definition object

        ddo.restrict = "AE"; //Atributo e Element (AE)
        ddo.transclude = true;

        ddo.scope = {
            nome: '@'
        };

        ddo.templateUrl = 'js/directives/personagem-painel.html';

        return ddo;
    });
