
var filteringModule = require('./FilteringModule.js');
var callBackFunc = function(err, filteredDirectory) {
	if (err) {
		console.log("there was an error " + err);
	} else {
		for (var x in filteredDirectory) {
			console.log(filteredDirectory[x]);
		}
	}
}
filteringModule(process.argv[2], process.argv[3], callBackFunc);

