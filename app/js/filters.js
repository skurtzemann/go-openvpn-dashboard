var ovpnDashboardApp = angular.module('ovpnDashboardApp');

ovpnDashboardApp.filter('conditionnal', function(){
  return function(v, yes, no){
      return v ? yes : no;
  };
});