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

