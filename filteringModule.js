module.exports = function(directory, extFilter, callBackFunc){
	const fs = require('fs');
	fs.readdir(directory, function(err, data) {
		
		if (err) {
			return callBackFunc(err)
		}
		regExFilter = new RegExp('\\.'+extFilter+'$','i');
		
		filteredDirectory = data.filter(function(value) {
			return regExFilter.test(value);
		});
		
		return callBackFunc(err, filteredDirectory);
		
		

	})

}

