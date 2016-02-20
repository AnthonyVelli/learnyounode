var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res) {
	
	var urlParse = url.parse(req.url, true);
	var parsedTime = {};
	var day = new Date(urlParse.query.iso);
	
	if (urlParse.pathname === '/api/parsetime') {
		parsedTime["hour"] = day.getHours();
		parsedTime["minute"] = day.getMinutes();
		parsedTime["second"] = day.getSeconds();
	}
	if (urlParse.pathname === '/api/unixtime') {
		parsedTime["unixtime"] = day.getTime();
	}
	res.writeHead(200, {'Content-Type': "application/json"});
	res.end(JSON.stringify(parsedTime));
})

server.listen(process.argv[2]);