myApp.factory("Club", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/club");    
    var sync = $firebase(ref);
    
    var club = sync.$asArray();
    var getClubs = function() {
        return club;
    }
    
    var addClub = function(newClub) {
        club.$add(newClub);
    }
    
    var removeClub = function(id) {
        club.$remove(id);
    }
    
    var updateClub = function (id) {
        club.$save(id);
    };
    
    
    return {
        getClubs: getClubs,
        addClub: addClub,
        removeClub: removeClub,
        updateClub: updateClub,
    }
});