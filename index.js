// index.js

var options = {
	"friends" : [
		"gnomes are",
		"unicorns are",
		"lizard people are",
		"sloths are",
		"buffalo are",
		"neanderthals are",
		"Wu-Tang Clan is",
	],
	"verbs" : [
		"watching",
		"listening",
		"running wild",
		"keeping watch",
		"partying",
		"roaming",
		"skipping",
	]
}

function rand(item) {
	return options[item][Math.floor(Math.random() * options[item].length)]
}

module.exports = {
	friend_log: function(app) {
		var port = app.get('port');
		var env = app.get('env');

		if (port && env) {
			console.log('The %s %s on port %d in %s mode!', rand('friends'), rand('verbs'), port, env);
		}
		else if ((port && !env) || (port && typeof env === 'undefined')){
			console.log('The %s %s on port %d!', rand('friends'), rand('verbs'), port);
		}
		else if (!port && env) {
			console.log('The %s %s in %s mode!', rand('friends'), rand('verbs'), env);
		}
		else {
			console.log('The %s %s!', rand('friends'), rand('verbs'));
		}
	},

	listen: function(app) {
		app.listen(app.get('port'), this.friend_log(app));
	}
};
