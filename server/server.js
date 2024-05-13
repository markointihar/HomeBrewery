const express = require('express');
const app = express();

// Middleware za obdelavo JSON podatkov
app.use(express.json());

// Uporaba usmerjevalnikov
app.use('/api', require('./routes/api'));

// Nastavitev strežnika
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Strežnik deluje na portu ${PORT}`);
});
