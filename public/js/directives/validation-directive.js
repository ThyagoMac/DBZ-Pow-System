angular.module('minhasDiretivas')
    .directive('uiValidation', function () {
        console.log("validation-directive2");

        return {
            templateUrl: "partials/ui-validation-alert.html",
            require: '^ngModel',
            restric: "A",
            transclude: true,
            scope: {
                formname: '@',
                inputid: '@',
                tipovalidacao: '@'
            }
        }
    });

angular.module('minhasDiretivas')
    .directive('uiDate', function () {
        console.log("date-directive3");

        return {
            restric: "A",
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {
                var _formatDate = function (date) {
                    date = date.replace(/[^0-9]+/g, ""); //limpa tdo que nao for numero como (/\D/g,"")
                    if (date.length > 2) {
                        date = date.substring(0, 2) + "/" + date.substring(2); //>2 = add "/"
                    }
                    if (date.length > 5) {
                        date = date.substring(0, 5) + "/" + date.substring(5, 9); //max 9
                    }
                    return date;
                };

                element.bind("keyup", function () {
                    ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                    ctrl.$render();
                });
            }
        };
    });

angular.module('minhasDiretivas')
    .directive('uiReal', function () {
        console.log("real-directive4");

        return {
            restric: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ctrl) {

                ctrl.$parsers.unshift(function (viewValue) {
                    if (viewValue.length <= 3) {
                        viewValue = '00' + viewValue;
                    }
                    var value = viewValue;
                    value = value.replace(/\D/g, ""); //replace tdo que nao for numero para ""
                    value = value.replace(/(\d{2})$/, ",$1"); //Seta a , antes do 2 primeiros numeros
                    var qtdLoop = (value.length - 3) / 3; //Remove os 3 digitos (,00) e divide o resto por 3
                    var count = 0;
                    while (qtdLoop > count) {
                        count++;
                        value = value.replace(/(\d+)(\d{3}.*)/, "$1.$2"); //Seta o . a cada 3
                    }
                    var plainNumber = value.replace(/^(0)(\d)/g, "$2");

                    element.val(plainNumber);
                    return plainNumber;
                });

                element.bind('blur', function () {
                    var valueFilter = element.val();
                    valueFilter = valueFilter.replace(/\D/g, "");
                });
            }
        };
    });

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

angular.module('minhasDiretivas')
    .directive('uiPass', function () {
        console.log("directive-pass7");

        return {
            scope: {
            tipo: '@'
            },
            require: 'ngModel',
            link: function (scope, element, attrs, control) {
                control.$validators.password = function (viewValue) {
                    if (control.$isEmpty(viewValue)) //empt = correct value
                    {
                        return true;
                    }
                    
                    var mensagem = "";
                    var pass = viewValue;
                    var testLetras = new RegExp(/[a-z]/i);
                    var testNum = new RegExp(/[0-9]/i);
                    var testEspecial = new RegExp(/[^a-z0-9]/i);
                    
                    if (pass.length <= 3) { // False value
                        var mensagem = "Campo muito curto";
                        var span = document.getElementById('passId');
                        span.innerHTML = mensagem;
                        return false;
                    }
                    if (!testLetras.test(pass)) {
                        var mensagem = "Campo FALTA letras";
                        var span = document.getElementById('passId');
                        span.innerHTML = mensagem;
                        return false;
                    }

                    if (!testNum.test(pass)) {
                        var mensagem = "Campo FALTA numeros";
                        var span = document.getElementById('passId');
                        span.innerHTML = mensagem;
                        return false;
                    }

                    if (!testEspecial.test(pass)) {
                        var mensagem = "Campo FALTA caractere especiais";
                        var span = document.getElementById('passId');
                        span.innerHTML = mensagem;
                        return false;
                    }
                    
                    return true; // wrong value
                };
            }
        };
    });

/*
angular.module('minhasDiretivas')
    .directive('uiPass', function () {
        console.log("directive-pass8");
        
        return {
            scope: {
            tipo: '@'
            },
            require: 'ngModel',
            link: function (scope, element, attrs, control) {
                control.$validators.password = function (viewValue) {                    
                    
                    var pass = viewValue;
                    var testLetras = new RegExp(/[a-z]/i);
                    var testNum = new RegExp(/[0-9]/i);
                    var testCaracEspecial = new RegExp(/[^a-z0-9]/i);
                    var algoErrado = true; //control var
                    var mensagem = "";

                    if (!testCaracEspecial.test(pass)) {
                        mensagem = "Campo FALTA caractere especiais";
                        algoErrado = false;
                    }
                    if (!testNum.test(pass)) {
                        mensagem = "Campo FALTA numeros";
                        algoErrado = false;
                    }
                    if (!testLetras.test(pass)) {
                        mensagem = "Campo FALTA letras";
                        algoErrado = false;
                    }
                    if (pass.length <= 3) {
                        mensagem = "Campo muito curto";
                        algoErrado = false;
                    }

                    var spanMsg = document.getElementById('passId');
                    spanMsg.innerHTML = mensagem;
                
                    if (control.$isEmpty(viewValue)){ //empt input = true
                        algoErrado = true;
                    }
                    return algoErrado; // reurn control var
                };
            }
        };
    });
*/

