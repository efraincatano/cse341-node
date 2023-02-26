const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContants = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('node_app.contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getOneContant = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDb()
    .db()
    .collection('node_app.contacts')
    .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getAllContants, getOneContant };