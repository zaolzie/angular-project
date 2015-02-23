myApp.controller("clubCtrl", function($scope, Club) {
    $scope.clubs = Club.getClubs();
    $scope.addClub = function(newClub) {
        Club.addClub(
            {
                name: newClub.name,
            }
        );
         resetCreateForm();
    };
    $scope.updateClub = function (club) {
        Club.updateClub(club);
    };

    $scope.removeClub = function (club) {
        Club.removeClub(club);
    };
    
    $scope.currentClub = null;
   
    
    function isCurrentClub(club) {
        return $scope.currentClub !== null && club.name === $scope.currentClub.name;
    }
    
    function setCurrentClub(club) {
        $scope.currentClub = club;
    }
    
    $scope.isCurrentClub = isCurrentClub;
    $scope.setCurrentClub = setCurrentClub;
    
    
     $scope.isCreatingClub = false;
        $scope.isEditingClub = false;
        
        
        function startCreatingClub() {
              $scope.isCreatingClub = true;
              $scope.isEditingClub = false;
              resetCreateForm();
        }

        function cancelCreatingClub() {
              $scope.isCreatingClub = false;
        }
          
        function startEditingClub() {
              $scope.isCreatingClub = false;
              $scope.isEditingClub = true;
        }

        function cancelEditingClub() {
              $scope.isEditingClub = false;
              $scope.editedClub = null;
        }
        
        function shouldShowCreatingClub(){
            return $scope.currentClub && !$scope.isEditingClub;
        }
        
        function shouldShowEditingClub(){
            return $scope.isEditingClub && !$scope.isCreatingClub;
        }
        
        
        $scope.startCreatingClub =startCreatingClub ;
        $scope.cancelCreatingClub =cancelCreatingClub ;
        $scope.startEditingClub = startEditingClub;
        $scope.cancelEditingClub =cancelEditingClub ;
        $scope.shouldShowCreatingClub = shouldShowCreatingClub;
        $scope.shouldShowEditingClub = shouldShowEditingClub;
        
        
        
        function resetCreateForm() {
          $scope.newClub = {
              name: ''
          };
         }

      //-------------------------------------------------------------------------------------------------
      // CRUD
      //-------------------------------------------------------------------------------------------------
      
      
      $scope.editedClub = null;
      $scope.editedClubId = null;
      
      function setEditedClub(Club){
          $scope.editedClub = angular.copy(Club);
      }
      
      $scope.setEditedClub = setEditedClub;
      
    
});