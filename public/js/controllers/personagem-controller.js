angular.module('dbzmod').controller('PersonagensController', function ($scope/*, $http*/) {

    $scope.personagens = [
    {
        nome: "Majin Ada",
        classe: "Especialista",
        raca: "Majin",
        sexo: "Fem",
        idade: "18",
        poderDeLuta: "8023",
        url: 'https://i.imgur.com/MStrWbZ.png'
    }, 
    {
        nome: "Firzen",
        classe: "Tanque",
        raca: "Changeling",
        sexo: "Masc",
        idade: "13",
        poderDeLuta: "8746",
        url: 'https://pm1.narvii.com/6450/aa95c48ae99a3d2382bb28f26d13eb3918a42548_hq.jpg'
    }];

    $scope.pesquisa = '';

});

/*
    $http.get('dbz/personagens')
    .success(function (personagens) {
        $scope.personagens = personagens;
    })
    .error(function (error) {
        console.log(error)
    });
*/