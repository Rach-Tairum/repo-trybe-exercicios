const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'rachel',
	password: 'RCCT2507',
	database: 'model_example' });

module.exports = connection;