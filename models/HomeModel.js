const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  }
})

module.exports = mongoose.model('Home', HomeSchema);