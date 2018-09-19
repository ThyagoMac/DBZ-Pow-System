angular.module('minhasDiretivas', [])
    .directive('personagemCard', function () {

        var ddo = {}; //directive definition object

        ddo.restrict = "AE"; /*Atributo e Element (AE)
                            ‘A’ – <span hello-world></span>
                            ‘E’ – <hello-world></hello-world>
                            ‘C’ – <span class=“hello-world”></span>
                            ‘M’ – <!– directive: hello-world –>
                            */
        ddo.transclude = true;

        ddo.scope = {
            nome: '@'
        };

        ddo.templateUrl = 'partials/personagem-painel.html';
        //ddo.template = '<h3>Hello World!!</h3>';
        console.log("minhas-diretivas1");
        return ddo;
    });
