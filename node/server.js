const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

// CONTROLLERS
var filesCtrl = require('./controllers/files');

//CORS
app.use(
	cors({
		credentials: true,
		origin: true
	})
);
app.options('*', cors());

app.use(
	bodyParser.json({
		limit: '50mb'
	})
);
app.use(
	bodyParser.urlencoded({
		limit: '50mb',
		extended: true
	})
);

app.listen(3000, function() {
	console.log('server running on port 3000', '');
});

app.use('/api/v1/files', filesCtrl);