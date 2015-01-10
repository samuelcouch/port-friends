var friends = [
	"The gnomes are listening",
	"The unicorns are running wild",
	"The lizard people people are rejoicing",
	"Bambi is looking for his mother",
	"The sloths are slothing",
	"The party's poppin"
];

module.exports = {
	hello: function(options){
		options.myport = options.myport || undefined;
		options.mode = options.mode || undefined;
		var friend = friends[Math.floor(Math.random()*friends.length)];

		if(options.myport && options.mode){
			console.log(' %s on port %d in %s mode', friend, options.myport, options.mode);	
		}
		else if(options.myport && !options.mode){
			console.log(' %s on port %d', friend, options.myport);	
		}
		else{
			console.log('%s!', friend);
		}
	}
}