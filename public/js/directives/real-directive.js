angular.module('minhasDiretivas')
    .directive('uiReal', function () {
        console.log("real-directive4");

        return {
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