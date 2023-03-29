const explain_app = angular.module('explain-breed', []);

explain_app.controller('ExplainController', ['$scope', function($scope) {
    $scope.breed = '';
    console.log($scope.breed);

    $scope.explain_breed = function(breed) {
        if (breed == null ||
            breed == "") {
            show_message("Raça nao preenchida!", "error");         
            return;
        }
    
        console.log("agr vai");

    }
}]);