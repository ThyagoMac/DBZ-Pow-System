angular.module('dbzmod').controller('CriacaoController', function($scope, $http, $timeout){

    var vm = this;
    vm.personagem = {};
    vm.texto = "";
    vm.objetos = [];
    var headings = ['protocolo', 'tipo', 'subTipo', 'categoria', 'status', 'codigo', 'numero', 'data'];


    vm.empty = function() {
        return vm.objetos === [];
    };

    vm.executarFormatacao = function(){
        $timeout(vm.formatar, 500);
    }

    vm.formatar = function(){
        
        var datasArray = [];
        var dateDia = vm.texto.match(/([\ ])\d{2}([\/])/g);
        var dateMes = vm.texto.match(/([\/])\d{2}(\D)/g);
        var dateAno = vm.texto.match(/([\/])\d{2}([\/])\d{4}/g);
        var dateHora = vm.texto.match(/([\ ])\d{2}([\:])\d{2}([\:])\d{2}/g);
        var arrHora = [];

        if (dateAno && dateHora){
            for (var i = 0; dateDia.length > i; i++){
                
                dateAno[i] = dateAno[i].substring(4);
                dateMes[i] = dateMes[i].replace(/([\/])/, '');
                dateMes[i] = dateMes[i].replace(/([\/])/, '');
                dateDia[i] = dateDia[i].substring(1);
                dateDia[i] = dateDia[i].replace(/([\/])/, '');
                arrHora[i] = dateHora[i].split(":");
                datasArray[i] = new Date(dateAno[i], (dateMes[i]-1), dateDia[i], arrHora[i][0], arrHora[i][1], arrHora[i][2], 0);

            }
        }

        //remove a data do vm.texto
        var textoSemData = vm.texto;
        textoSemData = textoSemData.replace(/\d{2}([\/])\d{2}([\/])\d{4}([\ ])\d{2}([\:])\d{2}([\:])\d{2}/g,'\ ');
        //Separa pelos saltos de linha (enter) --> filter testa cada item.length removendo os lengh 0
        var cells = textoSemData.split('\n')
            .filter(function (item) {return item.length})
            .map(function (el) { return el.split(/\s+/); });

        var conuter = 0;
        var out = cells.map(function (el) {
            var objTxt = {};
            for (var i = 0; i < headings.length; i++) {
                if (headings[i] == "data"){
                    objTxt[headings[i]] = datasArray[conuter++];
                } else { 
                    objTxt[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
                }
            
            }
            return objTxt;
        });

        vm.objetos = out;
        console.log(vm.objetos);
    }
    
    /////////////////////////////////////
/*
    //arquivo ".txt" protocolo - tipo- sub tip- categoria- status- data- cod- num-
    var fileTxt = '0744992/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 13/03/2018 15:50:17 P051154 4 \n0806920/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 22/03/2018 10:38:06 P043133 6 \n0786496/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 28/03/2018 15:23:09 P031390 2  \n0817619/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 03/04/2018 16:16:40 P031390 2 \n0817806/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 04/04/2018 15:50:15 P031390 4  \n0785258/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 05/04/2018 08:08:16 P042459 3  \n0806301/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 05/04/2018 15:02:11 P042459 3   \n0822228/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 06/04/2018 13:06:41 P031390 2  \n0808589/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 06/04/2018 13:50:47 P042459 4  \n0786124/2018 AUTORIZA«√O PR…VIA-M…DICA DOCUMENTA«√O DEFERIDA 12/04/2018 13:33:50 P042459 11';
    var fileTxtHeadings = 'protocolo tipo subi-tipo categoria status data hora cododigo numero numero-qual-quer \n';
    // Add headings.
    fileTxt = fileTxtHeadings+fileTxt;

    //Separa pelos saltos de linha (enter)
    var cells = fileTxt.split('\n');
    //map devolve um array removendo os espaços
    cells = cells.map(function (el) { return el.split(/\s+/); });
    console.log("Variavel cells= " + cells);

    //remove o 1º array e o coloca na var headings.
    var headings = cells.shift();
    console.log("Variavel headings= " +headings);

    var out = cells.map(function (el) {
        console.log("Variavel out= " +out);

    var obj = {};
    for (var i = 0, l = el.length; i < l; i++) {
        obj[headings[i]] = isNaN(Number(el[i])) ? el[i] : +el[i];
    }
    
    return obj;
    });

    var x = JSON.stringify(out, null, 2);

    console.log("obj: " + x);
*/
//////////////////

    
    ////////////////////////////////////////////////////////


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
        personagem.poderDeLutaAtual = 0;
        personagem.auraKi = "";
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
        personagem.kaioken = 1;
    }

    vm.validationPersonagem = function(personagem){

        var formularioValido = true;

        if (!personagem.nome){
            alert("Insira nome");
            formularioValido = false;
        }

        if(personagem.idade < 4){
            alert("Idade minima necessaria");
            formularioValido = false;
        }

        if (!personagem.poderDeLuta){
            alert("Insira Poder de Luta Inicial");
            formularioValido = false;
        }

        if(personagem.poderDeLuta < 1){
            alert("Poder de Luta Inicial Não Pode Ser Menor Que 1");
            formularioValido = false;
        }

        /*{
            mensagem = "Nome está com algum problema";
            validacao = false;
        }*/

        return formularioValido;
    }

    vm.salvarPersonagem = function(personagem){
        var personagens = vm.recuperarPersonagens(); //getPersonagens
        personagens.push(personagem) //insere personagem > personagem
        console.log(personagens);
        localStorage.setItem("personagens", JSON.stringify(personagens));
    }

    vm.submeter = function() {

        if(!vm.validationPersonagem(vm.personagem)){
            return; //return interrompe o fuxo do codigo.
        }
        vm.personagem.id = vm.gerarIdentificador(); //gera obj id e joga p/ personagem
        vm.configurarValoresPadrao(vm.personagem); //constructor valores padroes
        vm.salvarPersonagem(vm.personagem);
    }
    
});

