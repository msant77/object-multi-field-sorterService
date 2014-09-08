var config = require('./config.js').configOnArray();
var books = require('./dataSorter.js');

books.sort(config, function(sortedNames) {
	console.log(sortedNames); 
});
