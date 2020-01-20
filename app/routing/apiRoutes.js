var friends = require("../data/Friends");

module.exports = function(app){
    
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){

        var perfectMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var userData = req.body;
        var userScores = userData.scores;

        var totalDifference;
        for (var i = 0; i < friends. length; i++){
            var recentFriend = friends[i];
            totalDifference = 0;

            for(var j = 0; j < recentFriend.scores.lenght; j++){
                var recentFriendScore = recentFriend.scores[j];
                var userScore = userScores[j];

                totalDifference += Math.abs(parseInt(recentUserScore) - parseInt(recentFriendScore));

            }

            if(totalDifference <= perfectMatch.friendDifferences){
                perfectMatch.name = recentFriend.name;
                perfectMatch.photo = recentFriend.photo;
                perfectMatch.friendDifference = totalDifference;
            }
        }

        friends.push(userData);

        res.json(perfectMatch)
    })
}