const { Schema, model } = require('mongoose');

const RequestRegister = new Schema({
  request: Number,
  description: String,
  consultant: String,
  date: '',
  tags:[String]
});
module.exports = model('RegRequest', RequestRegister);