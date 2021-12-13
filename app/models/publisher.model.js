const mongoose = require('mongoose');

const Publisher = mongoose.model(
  'Publisher',
  new mongoose.Schema({
    name: String,
    metaName: String,
    imageUrl: String,
  })
);

module.exports = Publisher;
