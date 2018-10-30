var mongoose = require('mongoose');

var classementSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  sexe: String,
  annee: Number,
  event: String,
  phase: String,
  rang: Number
});

module.exports = mongoose.model('classements', classementSchema);