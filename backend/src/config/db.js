const mysql= require('mysql2');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'react',
  });

module.exports = connection;