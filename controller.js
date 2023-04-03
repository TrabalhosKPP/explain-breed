const explain_app = angular.module('explain-breed', []);

explain_app.controller('ExplainController', ['$scope', function ($scope) {
    $scope.breed = '';


    $scope.explain_breed = function (breed) {
        if (breed == null ||
            breed == "") {
            show_message("Raça nao preenchida!", "error");
            return;
        }
        console.log("agr vai");

        const apiKey = "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";
        const prompt = `Explique sobre a raça ${breed}`;

        fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: prompt,
                max_tokens: 250,
                top_p: 1,
                temperature: 0
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                return;
            })
            .catch(error => console.error(error));

    }
}]);