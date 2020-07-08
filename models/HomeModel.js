const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  title: {
    type: String
  },
  name: {
    type: String
  },
  content: {
    type: String
  }
}, { versionKey : false })

module.exports = mongoose.model('Home', HomeSchema);