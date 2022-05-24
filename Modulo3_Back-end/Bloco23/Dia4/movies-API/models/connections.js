const mysql = require('mysql2/promise');

const connections = mysql.createPool({
  host: 'localhost',
  user: 'rachel',
  password: 'RCCT2507',
  database: 'model_example'
});

module.exports = connections;