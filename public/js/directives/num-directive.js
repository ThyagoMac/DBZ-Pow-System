angular.module('minhasDiretivas')
    .directive('uiNum', function () {
        console.log("num-directive10");

        return {
            restric: "A",
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                var formatNum = function (num) {
                    if(num){
                        //limpa tdo que nao for numero como (/\D/g,"")
                        numero = num.replace(/\D/g,""); 
                        return numero;
                    }
                };

                //binda o viewvalue quando solta a tecla digitada.
                element.bind("keyup", function () {
                    ctrl.$setViewValue(formatNum(ctrl.$viewValue));
                    ctrl.$render();
                });
            }
        };
    });