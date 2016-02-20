const http = require('http');
const bl = require('bl');
http.get(process.argv[2], function(response) {
	response.pipe(bl(function(err, data) {
		dataStr = data.toString();
		console.log(dataStr.length);
		console.log(dataStr);
	}))
})