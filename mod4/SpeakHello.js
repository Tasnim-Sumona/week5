(function (window) {

	var helloSpeaker = {};

	var speak = "Hello";

	helloSpeaker.speak = function (name) {

		console.log (speak + ' ' + name);

	}

	window.helloSpeaker = helloSpeaker;

})(window)