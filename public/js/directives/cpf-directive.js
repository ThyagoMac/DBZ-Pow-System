angular.module('minhasDiretivas')
    .directive('uiCpf', function () {
        console.log("CPF-directive5");

        return {
            restric: "A",
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                var _formatCpf = function (cpf) {
                    cpf = cpf.replace(/[^0-9]+/g, ""); //limpa tdo que nao for numero como (/\D/g,"")
                    if (cpf.length > 3) {
                        cpf = cpf.substring(0, 3) + "." + cpf.substring(3); //>2 = add "/"
                    }
                    if (cpf.length > 7) {
                        cpf = cpf.substring(0, 7) + "." + cpf.substring(7); //max 9
                    }
                    if (cpf.length > 10) {
                        cpf = cpf.substring(0, 11) + "-" + cpf.substring(11, 13); //max 9
                    }
                    return cpf;
                };

                element.bind("keyup", function () {
                    ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
                    ctrl.$render();
                });
            }
        };
    });

    /*
angular.module('minhasDiretivas')
   .directive('uiCpfd', function () {
       console.log("cpfd-directive6");

       return {
           require: 'ngModel',
           link: function (scope, element, attrs, ctrl) {

               ctrl.$parsers.unshift(function (viewValue) {
                   if (viewValue.length <= 10) {
                    var value = viewValue;
                    var qtdLoop = value.length / 3;
                    var count = 0;

                    while (qtdLoop > count) {
                        count++;
                        value = value.replace(/(\d+)(\d{3}.*)/, "$1.$2"); //Seta o . a cada 3
                    }
                    

                   element.val(value);
                   return value;
                   }
               });
           }
       };
   });
*/