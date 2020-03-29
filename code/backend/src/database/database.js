const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'docker',
  password: '123456',
  port: '3306',
  database: 'database',
})

connection.connect(error => {
  if(error) {
      console.log('Bad connection with database... ', error);
      return;
  }else {
      console.log('Sucess connection with database');
  }
});

module.exports = connection;
