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