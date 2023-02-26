//const dotenv = require('dotenv');
//dotenv.config();
const MongoClient = require('mongodb').MongoClient;
MONGODB_URI="mongodb+srv://ecp97:sinsajo123@cluster0.0406lyt.mongodb.net/?retryWrites=true&w=majority";



let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Database connection succesfully!');
    return callback(null, _db);
  }
  MongoClient.connect(MONGODB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Database connection falied');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};