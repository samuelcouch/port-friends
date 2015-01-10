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
			"keeping watch",
			"partying",
			"roaming",
			"skipping",
			]

module.exports = function(options){
		options = options || {};
		options.myport = undefined || options.myport;
		options.mode = undefined || options.mode;
		var friend = friends[Math.floor(Math.random()*friends.length)];
		var verb = verbs[Math.floor(Math.random()*verbs.length)];

		if(options.myport && options.mode){
			console.log('The %s %s on port %d in %s mode', friend, verb, options.myport, options.mode);	
		}
		else if(options.myport && !options.mode){
			console.log('The %s %s on port %d', friend, verb, options.myport);	
		}
		else{
			console.log('The %s %s!', friend, verb);
		}
	}