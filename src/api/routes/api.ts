import * as express from 'express';
import * as MongoClient from 'mongodb';

const router = express.Router();
const objectID = MongoClient.ObjectID;

// Connect
const connection = (closure) => {
	return MongoClient.connect('mongodb://localhost:27017/enAppDB', (err, db) => {
		if (err) return console.log(err);

		closure(db);
	});
};

// Error handling
const sendError = (err, res) => {
	response.status = 501;
	response.message = typeof err == 'object' ? err.message : err;
	res.status(501).json(response);
};

// Response handling
let response = {
	status: 200,
	data: [],
	message: null
};

// GET all verbs
router.get('/verbs', (req, res) => {
	connection((db) => {
		db.collection('verbs')
		.find()
		.toArray()
		.then((verbs) => {
			response = verbs;
			res.json(response);
		})
		.catch((err) => {
			sendError(err, res);
		});
	});
});

module.exports = router;
