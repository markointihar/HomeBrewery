const db = require('../config/db');

// Logika za pridobivanje vseh uporabnikov iz MySQL podatkovne baze
exports.getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Napaka pri pridobivanju uporabnikov:', err);
      res.status(500).json({ error: 'Napaka pri pridobivanju uporabnikov' });
      return;
    }
    res.json(results);
  });
};
