var friends = [
			"gnomes are",
			"unicorns are",
			"lizard people are",
			"sloths are",
			"buffalo are",
			"neanderthals are",
			"Wu-Tang Clan is",
			],

	verbs = [
			"watching",
			"listening",
			"running wild",
			"keeping watch",
			"partying",
			"roaming",
			"skipping",
			];

function get_friend(){
    return friends[Math.floor(Math.random()*friends.length)];
}

function get_verb(){
   return verbs[Math.floor(Math.random()*verbs.length)];
}

module.exports = {
    friend_log: function(app){
        var port = app.get('port');
        var env = app.get('env');

        if(port && env){
            console.log('The %s %s on port %d in %s mode!', get_friend(), get_verb(), port, env);
        }
        else if (port && !env){
            console.log('The %s %s on port %d!', get_friend(), get_verb(), port);
        }
        else if(!port && env){
            console.log('The %s %s in %s mode!', get_friend(), get_verb(), env);
        }
        else{
            console.log('The %s %s!', get_friend(), get_verb());
        }
    },
    listen: function(app){
        app.listen(app.get('port'), this.friend_log(app));
    }
};
