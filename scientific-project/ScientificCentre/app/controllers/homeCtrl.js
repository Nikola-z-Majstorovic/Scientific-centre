﻿scifiApp.controller('homeCtrl', ['$rootScope', '$scope', 'dataService', 'appService', function ($rootScope, $scope, dataService, appService) {
    //-----------------------------------------------------------------------------------------------------------
    $rootScope.icon = 'fa-home';
    $rootScope.title = 'Home';
    $rootScope.mode = 'view';
    //-----------------------------------------------------------------------------------------------------------
    appService.refreshScroll();
    //-----------------------------------------------------------------------------------------------------------
    $rootScope.query = "";
    //-----------------------------------------------------------------------------------------------------------
  
    //-----------------------------------------------------------------------------------------------------------



}]);