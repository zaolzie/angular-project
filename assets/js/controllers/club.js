myApp.controller("clubCtrl", function($scope, Club) {
    $scope.clubs = Club.getClubs();
    $scope.addClub = function(name) {
        Club.addClub(
            {
                name: name,
            }
        );
        delete $scope.name
    };
    $scope.updateClub = function (id) {
        Club.updateClub(id);
    };

    $scope.removeClub = function (id) {
        Club.removeClub(id);
    };
    
    $scope.currentClub = null;
    $scope.hideAllForms = false;
    
    
    function hideForms(){
        $scope.hideAllForms = true;
    }
    
    $scope.hideForms = hideForms;
    
    
    function isCurrentClub(club) {
        return $scope.currentClub !== null && club.name === $scope.currentClub.name;
    }
    
    function setCurrentClub(club) {
        $scope.currentClub = club;
        var el = document.getElementById("cancelPlayer");
        console.log(el);
        el.click();
         console.log(el);
      //$('#cancelPlayer').click();
    }
    
    $scope.isCurrentClub = isCurrentClub;
    $scope.setCurrentClub = setCurrentClub;
    
});