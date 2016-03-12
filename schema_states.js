var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  capital: {
    type: String,
    required: true
  },
  largest_town: {
    type: String,
    required: true
  }
});


