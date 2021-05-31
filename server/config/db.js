const db = require('mongoose');

const connectDB = async () => {
  const conn = await db.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  console.log(`connected:${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;
