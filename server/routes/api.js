const express = require('express');
const router = express.Router();

// Ruta za pridobivanje podatkov
router.get('/data', (req, res) => {
  res.json({ message: 'Pridobili ste podatke iz API-ja' });
});

module.exports = router;
