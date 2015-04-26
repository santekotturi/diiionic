angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $interval) {
	$scope.planetLocation = {
      cx: 100, 
      cy: 25, 
      r: 7
  	}

  	var locations = [{cx:100, cy:25}, {cx:175, cy:100}, {cx: 100, cy:175}, {cx:25, cy:100}];
  	var theta = 0
	  $interval(function(){
	     $scope.planetLocation.cx = 100 + 75*(Math.cos(theta))
	     $scope.planetLocation.cy = 100 + 75*(Math.sin(theta))
	     theta = theta + (Math.PI/200)
	     if(theta == 2*Math.PI){
	      	theta = 0;
		   }
		}, 100);
})

.controller('ChatsCtrl', function($scope) {
  $scope.svgSize = 100;
  $scope.rectSize = 75;
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('HistogramCtrl', ['$scope', function($scope){
  
  
}])
;
