angular.module('minhasDiretivas', [])
    .directive('personagemCard', function () {

        var ddo = {}; //directive definition object

        ddo.restrict = "AE"; //Atributo e Element (AE)
        ddo.transclude = true;

        ddo.scope = {
            nome: '@'
        };

        ddo.templateUrl = 'js/directives/personagem-painel.html';
        //ddo.template = '<h3>Hello World!!</h3>';
        return ddo;
    });
