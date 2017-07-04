const app = angular.module('appTest', []);

app.controller('inputTestCtrl', function() {

});

app.controller('tryAngularListCtrl', function ($scope) {
    $scope.listItems = [
      {'listText': 'A - Example list entry', 'date': '01.02.2003'},
      {'listText': 'B - Example list entry', 'date': '02.03.2004'},
      {'listText': 'C - Example list entry', 'date': '03.04.2005'},
      {'listText': 'D - Example list entry', 'date': '04.05.2006'},
      {'listText': 'E - Example list entry', 'date': '05.06.2008'},
      {'listText': 'F - Example list entry', 'date': '06.07.2009'},
      {'listText': 'G - Example list entry', 'date': '07.08.2010'},
      {'listText': 'H - Example list entry', 'date': '08.09.2011'},
      {'listText': 'I - Example list entry', 'date': '09.10.2012'},
      {'listText': 'J - Example list entry', 'date': '10.11.2013'},
    ],
    $scope.selectItems = [
        {value: 'lsitText', listLabel: 'Alphabetical (A - Z)'},
        {value: '-listText', listLabel: 'Alphabetical (Z - A)'}
      ]
});

app.controller('gravatarTestCtrl', function($scope, Gravatar) {
      $scope.gravatrUrl = function(email) {
        return Gravatar(email);
      }
      // $scope.gravatarUrl = "http://www.gravatar.com/avatar/" + md5("mkklosin@gmail.com") + "?size=200.jpg";
});
app.factory("Gravatar", function GravatarFactory() {
  var avatarSize = 200;
  var avatarUrl = "http://www.gravatar.com/avatar/";
  return function(email) {
    return avatarUrl = md5(email) + "?size=" + avatarSize.toString();
  }
})
