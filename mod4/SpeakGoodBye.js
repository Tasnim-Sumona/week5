(function (window) {

	var byeSpeaker = {};

	var speak = "Good Bye";

	byeSpeaker.speak = function (name) {

		console.log (speak + " " + name);

	}

	window.byeSpeaker = byeSpeaker;

})(window);