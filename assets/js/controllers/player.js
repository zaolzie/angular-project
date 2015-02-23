myApp.controller('playerCtrl', function($scope,$rootScope){

        $scope.players = [
            {"id": 0, "name": "Paweł Brożek", "url": "http://www.90minut.pl/kariera.php?id=180", "club": "Wisła", "position": "Napastnik" },
            {"id": 1, "name": "Arkadiusz Głowacki", "url": "http://www.90minut.pl/kariera.php?id=531", "club": "Wisła","position": "Obrońca" },
            {"id": 2, "name": "Dawid Kownacki", "url": "http://www.90minut.pl/kariera.php?id=23132", "club": "Lech","position": "Napastnik" },
            {"id": 3, "name": "Szymon Pawłowski", "url": "http://www.90minut.pl/kariera.php?id=7782", "club": "Lech","position": "Pomocnik" },
            {"id": 4, "name": "Miroslav Radović", "url": "http://www.90minut.pl/kariera.php?id=7406", "club": "Legia","position": "Pomocnik" },
            {"id": 5, "name": "Marek Saganowski", "url": "http://www.90minut.pl/kariera.php?id=1857", "club": "Legia","position": "Napastnik" },
            {"id": 6, "name": "Grzegorz Kuświk", "url": "http://www.90minut.pl/kariera.php?id=8331", "club": "Ruch","position": "Napastnik" },
            {"id": 7, "name": "Filip Starzyński", "url": "http://www.90minut.pl/kariera.php?id=14896", "club": "Ruch","position": "Pomocnik" },

        ];
        
       
        
        $rootScope.isCreatingPlayer = false;
        $rootScope.isEditingPlayer = false;
        
        
        function startCreatingPlayer() {
             console.log($scope.players);
              $rootScope.isCreatingPlayer = true;
              $rootScope.isEditingPlayer = false;
              resetCreateForm();
        }

        function cancelCreatingPlayer() {
              $rootScope.isCreatingPlayer = false;
        }
          
        function startEditingPlayer() {
              $rootScope.isCreatingPlayer = false;
              $rootScope.isEditingPlayer = true;
        }

        function cancelEditingPlayer() {
              $rootScope.isEditingPlayer = false;
              $scope.editedPlayer = null;
        }
        
        function shouldShowCreatingPlayer(){
            return $rootScope.currentClub && !$rootScope.isEditingPlayer;
        }
        
        function shouldShowEditingPlayer(){
            return $rootScope.isEditingPlayer && !$rootScope.isCreatingPlayer;
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
              club: $rootScope.currentClub.name
          };
         }

      //-------------------------------------------------------------------------------------------------
      // CRUD
      //-------------------------------------------------------------------------------------------------
      function createPlayer(player) {
          player.id = $scope.players.length;
          $scope.players.push(player);

          resetCreateForm();
      }

      $scope.createPlayer = createPlayer;
        

        
});