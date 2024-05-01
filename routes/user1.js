var express = require('express');
var router = express.Router();
var mongoose=require('mongoose');
require('dotenv').config();

const commentSchema = mongoose.Schema({
    user: String,
    bookname:String,
    comment: String,
    date: { type: Date, default: Date.now }
});
const model=mongoose.model("commentmodel",commentSchema)
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
