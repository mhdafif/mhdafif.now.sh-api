const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

  if (process.env.NODE_ENV === 'development') {
    console.log(`Mongo DB connected: ${conn.connection.host}`.green.underline.bold);
  }
}

module.exports = connectDB;