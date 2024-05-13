const mongoose = require('mongoose');

// Definicija sheme uporabnika
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  // dodajte polja po potrebi
});

// Ustvarjanje modela Uporabnik
const User = mongoose.model('User', userSchema);

module.exports = User;
