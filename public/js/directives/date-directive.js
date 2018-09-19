angular.module('minhasDiretivas')
    .directive('uiDate', function () {
        console.log("date-directive3");

        return {
            restric: "A",
            require: "ngModel",
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