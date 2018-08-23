const sqlFormatter = require('sql-formatter')

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


function format(input){
	if (!input){
		console.log('Input is required!')
		return
	}

	const logStatement = JSON.parse(input.replaceAll('undefined', '""'))
	// TODO: handle errors

	let output = logStatement.sql.replaceAll('\"', '').replaceAll(/\\/,'').replaceAll('}', '')


	if(logStatement.bindings){
		logStatement.bindings.forEach(b => {
			if ( (typeof b) === 'string' ) {
				output = output.replace('?', `'${b}'`)		
			}
			else {
				output = output.replace('?', b)
			}
			
		})	
	}

	console.log('bindings: ', logStatement.bindings)
	console.log(sqlFormatter.format(output))
}


// TODO: verify input is valid
format(process.argv[2])
