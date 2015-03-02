var http = require('http');

var app = require('./config/express')();

require('./config/database')('mongodb://localhost/mymeanbootstrapprojectdatabasebigname');

http.createServer(app)
	.listen(app.get('port'), function() {
		console.log('My MEAN Bootstrap Project iniciado com sucesso!');
		console.log("Servidor escutando na porta " + app.get('port'));
	});