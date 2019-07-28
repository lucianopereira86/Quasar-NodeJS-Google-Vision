const fs = require('fs');
const vision = require('@google-cloud/vision').v1p3beta1;
const credentials = require('../credentials.json');

var GOOGLEAPI = function() {};

GOOGLEAPI.prototype.imgToText = function(data, callback) {
	console.log('credentials', credentials);
	const client = new vision.ImageAnnotatorClient({
		credentials: credentials
	});
	let content = data.replace('data:image/jpeg;base64,', '');
	const request = {
		image: {
			content: content // data.indexOf('base64') > -1 ? data : fs.readFileSync(data)
		}
	};
	client
		.documentTextDetection(request)
		.then(results => {
			const fullTextAnnotation = results[0].fullTextAnnotation;
			if (fullTextAnnotation) {
				console.log(`Full text: ${fullTextAnnotation.text}`);
				callback(fullTextAnnotation);
			} else callback(null);
		})
		.catch(err => {
			console.error('documentTextDetection', err);
		});
};

module.exports = new GOOGLEAPI();
