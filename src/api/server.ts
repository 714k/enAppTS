import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as http from 'http';
import * as cors from 'cors';

/*
const router = express.Router();

// options for cors middleware
const options:cors.CorsOptions = {
	allowedHeaders: [
		'Origin',
		'X-Requested-With',
		'Content-Type',
		'Accept',
		'X-Access-token'
	],
	credentials: false,
	methods: 'GET, HEAD, OPTIONS, PUT, PATCH, POST, DELETE',
	origin: 'http://localhost:3000/',
	preflightContinue: false
};

// use cors middleware
router.use(cors(options));*/


const app = express(); 

const api = require('./routes/api');

/* Co*/


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api/v1/', api);

// Send all other request to Angular app
app.get('*', (req, res) => {
	res.sendfile(path.join(__dirname, 'dist/index.html'));
});

// enabled pre-flight
//router.options('*', cors(options));

// Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
	console.log('Api running on localhost:' + port);
});