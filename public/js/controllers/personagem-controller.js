angular.module('dbzmod').controller('PersonagensController', function ($scope/*, $http*/) {

    var vm = this;

    vm.auraKi = null;

    vm.personagens = JSON.parse(localStorage.getItem("personagens"));

    /*
    vm.personagens = [
    {
        id:1,
        nome: "Ada",
        sobreNome: "Majin",
        classe: "Especialista",
        raca: "Majin",
        sexo: "Fem",
        auraKi: "off",
        idade: 18,
        poderDeLuta: 8023,
        poderDeLutaAtual: 8023,
        poderDeLutaInimigo: 8100,
        transform:0,
        myHp: 100,
        hp: 200,
        ki: 100,
        ataque: 50,
        defesa: 50,
        danoF: 10,
        bonusF: 2,
        danoM: 10,
        bonusM: 1,  
        url: 'https://i.imgur.com/MStrWbZ.png'
    },
    {
        id:2,
        nome: "Firzen",
        sobreNome: "",
        classe: "Tanque",
        raca: "Changeling",
        sexo: "Masc",
        auraKi: "off",
        idade: 13,
        poderDeLuta: 8746,
        poderDeLutaAtual: 8746,
        poderDeLutaInimigo: 8800,
        transform:0,
        myHp: 100,
        hp: 200,
        ki: 100,
        ataque: 50,
        defesa: 50,
        danoF: 10,
        bonusF: 2,
        danoM: 10,
        bonusM: 1,  
        url: 'https://pm1.narvii.com/6450/aa95c48ae99a3d2382bb28f26d13eb3918a42548_hq.jpg'
    },
    {
        id:3,
        nome: "Pickles",
        sobreNome: "Sr",
        classe: "Assassino",
        raca: "Namek",
        sexo: "Masc",
        auraKi: "off",
        idade: 108,
        poderDeLuta: 1000,
        poderDeLutaAtual: 1000,
        poderDeLutaInimigo: 1000,
        transform:0,
        myHp: 100,
        hp: 200,
        ki: 100,
        ataque: 50,
        defesa: 50,
        danoF: 10,
        bonusF: 2,
        danoM: 10,
        bonusM: 1,  
        url: 'http://images.uncyc.org/pt/thumb/b/b9/Picc-kid.jpg/250px-Picc-kid.jpg'
    }];
    //local storage curso JS >><<
*/

    $scope.pesquisa = '';
    
    vm.powChange = function(personagem) {
        
        personagem.myHp = (personagem.hp*100)/200;
    
        personagem.transform = parseInt(personagem.transform, 10);

        if (personagem.auraKi == "off"){
            
            personagem.poderDeLutaAtual = ((personagem.poderDeLuta/2) * personagem.transform) + personagem.poderDeLuta;
            personagem.poderDeLutaAtual = Math.round(personagem.poderDeLutaAtual);

        } else if (personagem.auraKi == "on"){

            personagem.poderDeLutaAtual = ((personagem.poderDeLuta/2) * personagem.transform) + (personagem.poderDeLuta * 1.05);            
            personagem.poderDeLutaAtual = Math.round(personagem.poderDeLutaAtual);

        } else if (personagem.auraKi == "kaioken") {

            powAtual = ((personagem.poderDeLuta * 0.05) * personagem.transform) + (personagem.poderDeLuta * 1.05);
            personagem.poderDeLutaAtual = Math.round(personagem.poderDeLutaAtual);

        }

        var diferencaPercent = (personagem.poderDeLutaAtual*100)/personagem.poderDeLutaInimigo;

        if (personagem.classe == "Tanque"){

            personagem.ataque = diferencaPercent*0.5;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = (diferencaPercent*0.5)+5;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1);
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1);
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05);
            personagem.bonusM = Math.round(personagem.bonusM);
            

        } else if (personagem.classe == "Assassino"){

            personagem.ataque = diferencaPercent*0.5;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = diferencaPercent*0.5;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1)+2;
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1)+2;
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05)+2;
            personagem.bonusM = Math.round(personagem.bonusM);
            

        } else if (personagem.classe == "Especialista"){

            personagem.ataque = (diferencaPercent*0.5)+10;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = (diferencaPercent*0.5)+10;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1);
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1);
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05);
            personagem.bonusM = Math.round(personagem.bonusM);
            

        } else if (personagem.classe == "Balanceado"){
            personagem.ataque = diferencaPercent*0.5;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = diferencaPercent*0.5;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1);
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1);
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05);
            personagem.bonusM = Math.round(personagem.bonusM);
            

        }
        
    };

    

    vm.excluir = function(personagem){
        
        var personagens = JSON.parse(localStorage.getItem("personagens"));
        console.log(personagem.id);
        personagens.splice(personagem.id, 1);
        localStorage.setItem("personagens", JSON.stringify(personagens));
        console.log(personagens);
    }
    
});

/*  
    vm.personagens.forEach(personagem => {
        console.log(personagem);
    });

    per1.style.width = test+"%";

    $http.get('dbz/personagens')
    .success(function (personagens) {
        $scope.personagens = personagens;
    })
    .error(function (error) {
        console.log(error)
    });


    function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
///////////////////////////////////////////
var loopPer = $scope.personagens.length;
var i;
    for(i = 0; i < loopPer; i++ ) {
        console.log($scope.personagens[i]);
    }
///////////////////////////////////////////
*/