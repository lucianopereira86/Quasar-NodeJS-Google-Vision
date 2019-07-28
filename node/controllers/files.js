var express = require('express');
var router = express.Router();
var multer = require('multer');
var GOOGLEAPI = require('../plugins/googleapi');

var upload = multer({
	limits: {
		fieldSize: 50 * 1024 * 1024
	}
});

router.post('/', upload.fields([]), (req, res, next) => {
	var file = req.body;
	GOOGLEAPI.imgToText(file.base64, fullTextAnnotation => {
		let text = fullTextAnnotation.text;
		res.send(200, {text: text});
	});
});

module.exports = router;
