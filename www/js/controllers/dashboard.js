/**
 * Created by jaziel on 1/15/17.
 */
var DashboardCtrl = function DashboardCtrl($scope, $ionicSideMenuDelegate, $window) {



  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
};
