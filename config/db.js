const mysql = require('mysql');

// Konfiguracija povezave z MySQL podatkovno bazo
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'my_database'
});

// Povezovanje z bazo
connection.connect((err) => {
  if (err) {
    console.error('Napaka pri povezovanju z bazo:', err);
    return;
  }
  console.log('Uspešno povezan na MySQL podatkovno bazo');
});

module.exports = connection;
