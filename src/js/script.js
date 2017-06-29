const app = angular.module('appTest', []);

app.controller('inputTestCtrl', function() {

});

app.controller('tryAngularListCtrl', function ($scope) {
    $scope.listItems = [
      {'listText': 'Przykładowy element listy 1'},
      {'listText': 'Przykładowy element listy 2'},
      {'listText': 'Przykładowy element listy 3'},
      {'listText': 'Przykładowy element listy 4'},
    ];
});
