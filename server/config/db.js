const mysql = require('mysql2');

// Konfiguracija povezave z MySQL podatkovno bazo
const connection = mysql.createConnection({
  host: 'mysql-25d614f0-home-brewery1.h.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_OrgtFm8uU8iXhbepmIK',
  database: 'defaultdb',
  port: 25275
});

// Povezovanje z bazo
connection.connect((err) => {
  if (err) {
    console.error('Napaka pri povezovanju z bazo:', err);
    return;
  }
  console.log('Uspešno povezan na MySQL podatkovno bazo');
});

// Poskrbi, da se povezava pravilno zapre ob koncu
process.on('SIGINT', () => {
  connection.end((err) => {
    if (err) {
      console.error('Napaka pri zapiranju povezave:', err);
    } else {
      console.log('Povezava z MySQL podatkovno bazo uspešno zaprta');
    }
    process.exit(err ? 1 : 0);
  });
});

module.exports = connection;
