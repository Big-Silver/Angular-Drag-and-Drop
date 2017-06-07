'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', function($scope, $http) {
  $scope.spellArray1 = ["A", "B", "C", "D", "E", "F", "H", "I", "G", "K", "L", "M"];
  $scope.spellArray2 = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
  $scope.spellImgArray = [];

  $scope.updateImg = function(spell) {
    $http({
      method: 'GET',
      url: 'view2/img'
    }).then(function successCallback(response) {

        // RESPONSE CONTAINS YOUR FILE LIST
        console.log("Success");
        var temp = response.data;
        console.log(response);
        searchImage(temp);

      }, function errorCallback(response) {

        // ERROR CASE
        console.log("Error");
      });
  }

  var searchImage = function(item) {
    for(var i = 0; i < item.length; i++) {
      if(item[i] == '/' && item[i + 1] == 'a' && item[i + 2] == '>') {
        var temp = "view2/img/";
        for(var j = i - 1; j > 0; j--) {
          if(item[j] == '>') {
            for(var z = j + 1; z < i - 1; z++) {
              temp += item[z];
            }
            $scope.spellImgArray.push(temp);
            break;
          }
        }
      }
    }   
    $scope.spellImgArray.shift();
    $scope.spellImgArray.pop();
    console.log($scope.spellImgArray);
  }
}]);