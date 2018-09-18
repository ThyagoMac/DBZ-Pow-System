angular.module('dbzmod').controller('CriacaoController', function($scope/*, $http*/){

    $scope.personagem = {};

    $scope.submeter = function() {
        console.log($scope.personagem);
        /*$http.post('dbz/personagens', $scope.personagem)
        .success(function() {

        })
        .error(function(erro) {
            console.log(erro);
        })*/
    }
});

