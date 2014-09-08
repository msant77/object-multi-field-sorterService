
var http = require('http');
var url = require('url');

var config = require('./config.js'); 
var books = require('./dataSorter.js');

http.createServer(function (req, res) {

	var queryObject = url.parse(req.url,true).query;

	var propertiesAndDirectionsArray = config.parseQueryToArray(queryObject);

	var obj; 

	if (propertiesAndDirectionsArray.length == 0) {
		writeResponse(res, {})
	} else {
		books.sort(propertiesAndDirectionsArray, function(jsonReturn) {
			writeResponse(res, jsonReturn); 
		});
	}
}).listen(3000);

function writeResponse(res, obj) {

		if (obj == null) {
			throw new Error('null cannot be sent, refer to documentation or contact system administrator'); 
		}

		res.writeHead(200, {'Content-Type': 'text/json'});
		res.write(JSON.stringify(obj)); 
		res.end();
}

console.log('\nserver on and being listened at port 3000.');
console.log('use "http://localhost:3000/?title=asc&author=desc" in order to sort the data');
console.log('\n -- written by Marco Santana. Thanks for running this app'); 
