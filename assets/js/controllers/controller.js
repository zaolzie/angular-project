myApp.controller('MainCtrl', function($scope){
        $scope.clubs = [
            {"id": 0, "name": "Wisła"},
            {"id": 1, "name": "Lech"},
            {"id": 2, "name": "Legia"},
            {"id": 3, "name": "Ruch"},
        ];
        
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
        
        $scope.currentClub = null;
        
        function isCurrentClub(club) {
          return $scope.currentClub !== null && club.name === $scope.currentClub.name;
      }

        
        function setCurrentClub(club) {
            $scope.currentClub = club;
            
            cancelEditingPlayer();
            cancelCreatingPlayer();
        }
        
        $scope.setCurrentClub = setCurrentClub;
        
        $scope.isCreatingPlayer = false;
        $scope.isEditingPlayer = false;
        
        
        function startCreatingPlayer() {
              $scope.isCreatingPlayer = true;
              $scope.isEditingPlayer = false;
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
              $scope.editedBookmarkPlayer = null;
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

       
    })
;