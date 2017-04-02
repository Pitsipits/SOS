angular.module('starter.controllers', [])
.controller('Search', function($scope) {
  $scope.items = ['Baypointe Hospital & Medical Center',
  'Our Lady of Lourdes International Medical Center','Ridon St. Jude Medical Center',
  'ZMMG COOP Women and Children Hospital','Divine Spirit General Hospital','Mother And Child General Hospital'];
})

.controller('ToDoListCtrl', function($scope,$ionicModal) {
	$scope.toDoListItems = [{
    task: 'Bring extra towels',
    status: 'not done'
  }, {
    task: 'Water',
    status: 'not done'
  }, {
    task: 'Pizza',
    status:'on going'
  }];

$scope.AddItem = function(data){
	$scope.toDoListItems.push({task:data.newItem,status:'not done'});
	 data.newItem = ' ';
         $scope.closeModal();
  };
  
$ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
})
.controller('MapCtrl', function($scope, $ionicLoading) {
  $scope.mapCreated = function(map) {
    $scope.map = map;
  };

  $scope.centerOnMe = function () {
    console.log("Centering");
    if (!$scope.map) {
      return;
    }

    $scope.loading = $ionicLoading.show({
      content: 'Getting current location...',
      showBackdrop: false
    });

    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log('Got pos', pos);
      $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
      $scope.loading.hide();
    }, function (error) {
      alert('Unable to get location: ' + error.message);
    });
  };
});


