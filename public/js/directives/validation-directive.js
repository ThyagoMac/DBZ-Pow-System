angular.module('minhasDiretivas')
    .directive('uiValidation', function () {
        console.log("validation-directive2");

        return {
            require: 'ngModel',
            link: function(scope, element, attr, mCtrl) {
                
            }
        }
    });






