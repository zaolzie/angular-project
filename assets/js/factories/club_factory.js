myApp.factory("Club", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/club");    
    var sync = $firebase(ref);
    
    var Club = sync.$asArray();
    var getClubs = function() {
        return Club;
    }
    
    var addClub = function(newClub) {
        Club.$add(newClub);
    }
    
    var removeClub = function(club) {
        var ClubRef = new Firebase(FIREBASE_URI+"/club");
            Club.list = $firebase(ClubRef);
    
    
        Club.list.$remove(club.$id);
        // club.$remove(id);
    }
    
    var updateClub = function (club) {
        // Get the Firebase reference of the item
        var itemRef = new  Firebase(FIREBASE_URI + "/club/" + club.$id);

        // Firebase : Update the item
         $firebase(itemRef).$set({
             id: club.$id,
             name : club.name

         });
        // club.$save(id);
    };
    
    
    return {
        getClubs: getClubs,
        addClub: addClub,
        removeClub: removeClub,
        updateClub: updateClub,
    }
});