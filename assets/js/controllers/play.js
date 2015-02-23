myApp.controller("playerCtrl", function($scope, Player) {
    $scope.players = Player.getPlayers();
    
    $scope.positions = [
            { "name": "Bramkarz"},
            { "name": "Obrońca"},
            { "name": "Pomocnik"},
            { "name": "Napastnik"}
    ];
    
    
    $scope.addPlayer = function(name, url, position,club) {
        Player.addPlayer(
            {
                name: name,
                url: url,
                position: position,
                club: club
            }
        );
        
        resetCreateForm();
        delete $scope.name;
    };
    $scope.updatePlayer = function (id) {
        Player.updatePlayer(id);
    };

    $scope.removePlayer = function (id) {
        Player.removePlayer(id);
    };
    
    $scope.isCreatingPlayer = false;
        $scope.isEditingPlayer = false;
        
        
        function startCreatingPlayer() {
              $scope.isCreatingPlayer = true;
              $scope.isEditingPlayer = false;
              resetCreateForm();
        }

        function cancelCreatingPlayer() {
              $scope.isCreatingPlayer = false;
        }
          
        function startEditingPlayer() {
              $scope.isCreatingPlayer = false;
              $scope.isEditingPlayer = true;
        }

        function cancelEditingPlayer() {
              $scope.isEditingPlayer = false;
              $scope.editedPlayer = null;
        }
        
        function shouldShowCreatingPlayer(){
            return $scope.currentClub && !$scope.isEditingPlayer;
        }
        
        function shouldShowEditingPlayer(){
            return $scope.isEditingPlayer && !$scope.isCreatingPlayer;
        }
        
        
        $scope.startCreatingPlayer =startCreatingPlayer ;
        $scope.cancelCreatingPlayer =cancelCreatingPlayer ;
        $scope.startEditingPlayer = startEditingPlayer;
        $scope.cancelEditingPlayer =cancelEditingPlayer ;
        $scope.shouldShowCreatingPlayer = shouldShowCreatingPlayer;
        $scope.shouldShowEditingPlayer = shouldShowEditingPlayer;
        
        
        
        function resetCreateForm() {
          $scope.newPlayer = {
              name: '',
              url: '',
              position: '',
              club: ''
          };
         }

      //-------------------------------------------------------------------------------------------------
      // CRUD
      //-------------------------------------------------------------------------------------------------

    
});