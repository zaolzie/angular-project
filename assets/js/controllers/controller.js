myApp.controller('MainCtrl', function($scope,$rootScope){
        $scope.clubs = [
            {"id": 0, "name": "Wisła"},
            {"id": 1, "name": "Lech"},
            {"id": 2, "name": "Legia"},
            {"id": 3, "name": "Ruch"},
        ];
        
        $rootScope.currentClub = null;
        
        $rootScope.isCreatingPlayer = false;
        $rootScope.isEditingPlayer = false;
        
        function isCurrentClub(club) {
          return $rootScope.currentClub !== null && club.name === $rootScope.currentClub.name;
      }

        
        function setCurrentClub(club) {
            $rootScope.currentClub = club;
            
             $rootScope.isCreatingPlayer = false;
            $rootScope.isEditingPlayer = false;
            
            //$scope.cancelEditingPlayer();
            //$scope.cancelCreatingPlayer();
        }
        
        $scope.setCurrentClub = setCurrentClub;

       
    })
;