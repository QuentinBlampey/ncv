var mongoose = require('mongoose');

var galerieSchema = new mongoose.Schema({
  annee: Number,
  event: String,
  phase: String,
  src: String
});

module.exports = mongoose.model('galerie', galerieSchema);