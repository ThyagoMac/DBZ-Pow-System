angular.module('dbzmod').controller('CriacaoController', function($scope/*, $http*/){

    var vm = this;
    vm.personagem = {};
    
    //recupera personagens ou cria vazio
    vm.recuperarPersonagens = function(){
        var personagens = JSON.parse(localStorage.getItem("personagens"));
        if(!personagens){
            return [];
        } else {
            return personagens;
        }
    }

    vm.gerarIdentificador = function(){
        var idSalvo = localStorage.getItem("sequencePersonagem");
        var idRetorno;
        if(!idSalvo){
            idRetorno = 1;
        } else {
            idRetorno = ++idSalvo;
        }

        localStorage.setItem("sequencePersonagem", idRetorno);

        return idRetorno;
    }

    //semi construtor
    vm.configurarValoresPadrao = function(personagem){
        personagem.poderDeLutaInimigo = 3000;
        personagem.transform = 0;
        personagem.myHp = 100;
        personagem.hp = 200;
        personagem.ki = 100;
        personagem.ataque = 50;
        personagem.defesa = 50;
        personagem.danoF = 10;
        personagem.bonusF = 2;
        personagem.danoM = 10;
        personagem.bonusM = 1;
    }

    vm.salvarPersonagens = function(personagens){
        localStorage.setItem("personagens", JSON.stringify(personagens));
    }

    vm.submeter = function() {

        vm.personagem.id = vm.gerarIdentificador(); //gera obj id e joga p/ personagem
        vm.configurarValoresPadrao(vm.personagem); //constructor valores padroes
        var personagens = vm.recuperarPersonagens(); //getPersonagens
        personagens.push(vm.personagem) //insere personagem > personagem
        vm.salvarPersonagens(personagens); //salva

    }
        
/*
    $scope.editar = function(){
        personagens[indice_char] = JSON.stringify({
                Codigo   : $("#txtCodigo").val(),
                Nome     : $("#txtNome").val(),
                Telefone : $("#txtTelefone").val(),
                Email    : $("#txtEmail").val()
            });//Altera o item selecionado na tabela
        localStorage.setItem("personagens", JSON.stringify(personagens));
        alert("Informações editadas.")
        operacao = "A"; //Volta ao padrão
        return true;
    }
*/

/*
    $scope.excluir = function(){
        personagens.splice(indice_char, 1);
        localStorage.setItem("personagens", JSON.stringify(personagens));
        alert("Registro excluído.");
    }
*/

        /*$http.post('dbz/personagens', $scope.personagem)
        .success(function() {

        })
        .error(function(erro) {
            console.log(erro);
        })*/
    
});

