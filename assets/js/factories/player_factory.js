myApp.factory("Player", function($firebase, FIREBASE_URI) {
    
    var ref = new Firebase(FIREBASE_URI+"/player");    
    var sync = $firebase(ref);
    
    var player = sync.$asArray();
    var getPlayers = function() {
        return player;
    }
    
    var addPlayer = function(newPlayer) {
        player.$add(newPlayer);
    }
    
    var removePlayer = function(id) {
        player.$remove(id);
    }
    
    var updatePlayer = function (id) {
        player.$save(id);
    };
    
    
    return {
        getPlayers: getPlayers,
        addPlayer: addPlayer,
        removePlayer: removePlayer,
        updatePlayer: updatePlayer,
    }
});