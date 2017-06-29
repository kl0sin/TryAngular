let TryAngularList = angular.module('TryAngularList', []);

TryAngularList.controller('TryAngularListCtrl', function ($scope) {
    $scope.listItems = [
      {'listText': 'Przykładowy element listy 1'},
      {'listText': 'Przykładowy element listy 2'},
      {'listText': 'Przykładowy element listy 3'},
      {'listText': 'Przykładowy element listy 4'},
    ];
});
