var friends= require('../data/friends.js');

module.exports =  function (app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req,res) {
      
        var yourFriend = {
            name: '',
            photo: '',
            choiceDifference: 1000
        };

        var userData = req.body;
        var userScores = userData.choice;
       
        var choiceDifference;
        
        for (var i = 0; i < friends.length; i++) {
            choiceDifference = 0;
            for (var j = 0; j < friends[i].choice.length; j++) {
                
                choiceDifference = Math.abs(parseInt(userScores[j]) - parseInt(friends[i].choice[j]));
                
                if (choiceDifference === yourFriend.choiceDifference) {
                    yourFriend.name = friends[i].name;
                    yourFriend.photo = friends[i].photo;
                    yourFriend.friendDifference = choiceDifference;
                } else {
                    console.log ('something wrong bruh')
                }
            }
        }
        friends.push(userData);
        console.log(yourFriend);
        res.json(yourFriend)
    })
}
