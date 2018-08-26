angular.module('dbzmod').controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];

    $http.get('v1/fotos')
    .success(function (fotos) {
        $scope.fotos = fotos;
    })
    .error(function (error) {
        console.log(error)
    });

});







/*
{
    titulo: 'Majin Ada' ,
    url: 'https://i.imgur.com/MStrWbZ.png'
},
{
    titulo: 'Majin Ada2' ,
    url: 'https://i.imgur.com/MStrWbZ.png'
}
*/