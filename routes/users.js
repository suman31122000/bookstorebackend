var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
require('dotenv').config();

const bookschema=mongoose.Schema({
  name:String,
  description:String,
  author:String,
  image:String,
  price:Number,
  quantity:{type:Number,default:1},
  date: { type: Date, default: Date.now }
})
const model=mongoose.model("bookmodel",bookschema)
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = model;
